import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBz80maHGMDaT5EHd-ek_Tl97mQqF8r8KQ",
  authDomain: "fir-practice-c8d2a.firebaseapp.com",
  projectId: "fir-practice-c8d2a",
  storageBucket: "fir-practice-c8d2a.appspot.com",
  messagingSenderId: "666860349999",
  appId: "1:666860349999:web:0025e5bb78d8412e9a34da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
