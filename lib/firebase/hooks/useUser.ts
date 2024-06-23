import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseAuth } from "../clientApp";

export function useUserFirebase() {
  return useAuthState(firebaseAuth);
}
