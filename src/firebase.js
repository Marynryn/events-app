import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export const fetchData = async () => {
  const db = getDatabase();
  const dataRef = ref(db);

  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const data = snapshot.val();

      return data;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
