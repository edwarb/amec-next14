import { collection, deleteDoc, doc } from "firebase/firestore";
import { firebaseFS } from "../clientApp";

export function getCollectionFS(directory: string) {
  return collection(
    firebaseFS,
    `${process.env.NEXT_PUBLIC_FIREBASE_DIR}/${directory}`,
  );
}

export function getDocFS(directory: string) {
  return doc(
    firebaseFS,
    `${process.env.NEXT_PUBLIC_FIREBASE_DIR}/${directory}`,
  );
}

export function deleteDocFS(directory: string) {
  return deleteDoc(
    doc(firebaseFS, `${process.env.NEXT_PUBLIC_FIREBASE_DIR}/${directory}`),
  );
}
