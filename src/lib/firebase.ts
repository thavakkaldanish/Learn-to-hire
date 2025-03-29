import { initializeApp } from 'firebase/app';
import { getAuth, User } from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  DocumentReference,
  DocumentData 
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQv4fc77YqLdWm7QmNaW18TVWR5Q9SWmE",
  authDomain: "learn-to-hire.firebaseapp.com",
  projectId: "learn-to-hire",
  storageBucket: "learn-to-hire.firebasestorage.app",
  messagingSenderId: "464355070642",
  appId: "1:464355070642:web:3d6991c212efc6d1b76fab"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const createUserDocument = async (
  user: User | null,
  additionalData: Record<string, any> = {}
): Promise<DocumentReference<DocumentData> | undefined> => {
  if (!user) return undefined;

  try {
    const userRef = doc(db, 'users', user.uid);
    const snapshot = await getDoc(userRef);

    if (!snapshot.exists()) {
      const { email } = user;
      const createdAt = new Date();

      await setDoc(userRef, {
        email,
        createdAt,
        uid: user.uid,
        ...additionalData,
      });
    }

    return userRef;
  } catch (error) {
    console.error('Error creating user document:', error);
    throw error;
  }
};