import { collection, deleteDoc, doc } from "firebase/firestore";
import { firebaseFS } from "../clientApp";

const baseDir = process.env.NEXT_PUBLIC_FIREBASE_DIR;

if (!baseDir) {
  throw new Error("Environment variable NEXT_PUBLIC_FIREBASE_DIR is not defined");
}

export function getCollectionFS(directory: string) {
  return collection(
    firebaseFS,
    `${process.env.NEXT_PUBLIC_FIREBASE_DIR}/${directory}`,
  );
}

export function getDocFS(directory: string) {
  return doc(firebaseFS, `${baseDir}/${directory}`);
}

export function deleteDocFS(directory: string) {
  return deleteDoc(doc(firebaseFS, `${baseDir}/${directory}`));
}
