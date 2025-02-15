import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjDCltC2n-3xO58YjIV7_YN0qdK_QT1H4",
    authDomain: "staff-management-542ca.firebaseapp.com",
    projectId: "staff-management-542ca",
    storageBucket: "staff-management-542ca.firebasestorage.app",
    messagingSenderId: "412959591080",
    appId: "1:412959591080:web:753da3fd5a90027713d09d",
    measurementId: "G-GW9V61YK6D"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// // Initialize Messaging
// export const messaging = getMessaging(app);

// // Get Device Token
// export const requestForToken = async () => {
//   try {
//     const token = await getToken(messaging, { vapidKey: "BACfZ1KcR3XdVEXoOGL5F0Ym7u584eo1sInSmJDqt3QyBc3rJdRTSK9LvrlgCkvARGZxKDOvhRjbfqNiGuTUFj4" });
//     if (token) {
//       console.log("FCM Token:", token);
//       return token;
//     } else {
//       console.log("No registration token available. Request permission to generate one.");
//     }
//   } catch (error) {
//     console.error("Error getting FCM token:", error);
//   }
// };

// // Listen for Incoming Messages
// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("Message received:", payload);
//       resolve(payload);
//     });
//   });