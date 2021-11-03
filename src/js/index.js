//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { initializeApp } from "firebase/app";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";
const firebaseConfig = {
	apiKey: "AIzaSyApC6DSPz-1tXeeVODHKSeFylB2TQMzlJQ",
	authDomain: "socialnetworkproject-8ff49.firebaseapp.com",
	projectId: "socialnetworkproject-8ff49",
	storageBucket: "socialnetworkproject-8ff49.appspot.com",
	messagingSenderId: "107956426072",
	appId: "1:107956426072:web:e6df4086c1733f2274c12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
