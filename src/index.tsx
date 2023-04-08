import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
   apiKey: "AIzaSyAnKyJmvYiEkd2NJLDv60OijNMgNEvczeg",
   authDomain: "tesla-clone-31d8c.firebaseapp.com",
   projectId: "tesla-clone-31d8c",
   storageBucket: "tesla-clone-31d8c.appspot.com",
   messagingSenderId: "854356374347",
   appId: "1:854356374347:web:e7edf8ba6aca552792ece"
 };

export const provider = new GoogleAuthProvider();

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Provider store={store}>
            <App />
         </Provider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);
