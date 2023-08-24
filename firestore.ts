import { getFirestore, Timestamp, FieldValue, Filter } from "firebase-admin/firestore";

export const db = getFirestore();