import { getCountFromServer } from "firebase/firestore";
import { getCollectionFS } from "lib/firebase/utils/firestoreUtils";

export function getCountArticle() {
  return getCountFromServer(getCollectionFS("articles"));
}
