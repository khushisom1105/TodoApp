import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCjyGdIc1UeQcyqWqP0M3eBppZpeyfRhZM",
  authDomain: "pushnotifications-14e59.firebaseapp.com",
  projectId: "pushnotifications-14e59",
  storageBucket: "pushnotifications-14e59.firebasestorage.app",
  messagingSenderId: "766051950287",
  appId: "1:766051950287:web:00f8d33067945cf1fea1ba",
  measurementId: "G-8X8TMS576Q"
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export const generateToken = async()=>
{
   const permission = await Notification.requestPermission();
   console.log(permission);
}

