"use client";

import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseFS = getFirestore(firebaseApp as FirebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
export const firebaseRealDB = getDatabase(firebaseApp);
