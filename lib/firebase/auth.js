import { onAuthStateChanged as _onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "lib/firebase/clientApp";

export function onAuthStateChanged(cb) {
  return _onAuthStateChanged(auth, cb);
}

export async function signOutFirebase() {
  try {
    return firebaseAuth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
