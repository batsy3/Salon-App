import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore, Timestamp, FieldValue, Filter } from "firebase-admin/firestore";

initializeApp();

export const db = getFirestore();