import { ID, Permission, Query, Role } from "appwrite";
import { databases } from "../appwrite";
import { reactive } from "vue";

export const IDEAS_DATABASE_ID = "667bd3ac0039782499f8"; // Replace with your database ID
export const IDEAS_COLLECTION_ID = "66850d84002521de01ba"; // Replace with your collection ID

export const likedPosts = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)],
      [Permission.read(Role.any())]
    );

    this.current = response.documents;
  },
  async add(post) {
    const response = await databases.createDocument(
      IDEAS_DATABASE_ID,
      IDEAS_COLLECTION_ID,
      ID.unique(),
      post
    ).catch((err) => console.log(err))
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await databases.deleteDocument(IDEAS_DATABASE_ID, IDEAS_COLLECTION_ID, id);
    this.current = this.current.filter((post) => post.$id !== id);
    await this.init(); // Refetch ideas to ensure we have 10 items
  },
});
