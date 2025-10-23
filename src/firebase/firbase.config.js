import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2Fww4ijz4NdBVUr-LlsgDczGkyA3eHa0",
  authDomain: "green-nest-plant-auth.firebaseapp.com",
  projectId: "green-nest-plant-auth",
  storageBucket: "green-nest-plant-auth.firebasestorage.app",
  messagingSenderId: "507335944060",
  appId: "1:507335944060:web:4e8ec1cc327137bf1566f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;