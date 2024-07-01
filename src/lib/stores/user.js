import { ID } from "appwrite";
import { account } from "../appwrite";
import { reactive, ref } from "vue";

export const user = reactive({
  current: null,
  async init() {
    try {
      this.current = await account.get();
    } catch (e) {
      this.current = null;
    }
  },
  async register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    await this.login(email, password);
  },
  async login(email, password) {
    await account.createEmailPasswordSession(email, password);
    window.location.href = "/"; // Redirect to home page
  },
  async logout() {
    await account.deleteSession("current");
    this.current = null;
  },
});