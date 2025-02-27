require('dotenv').config();
const { initializeApp } = require('firebase/app');
const {getDatabase} = require('firebase/database');
const { getAuth } = require('firebase/auth');

/**
 * const firebaseConfig = {
  apiKey: "AIzaSyDfbJ7bpEMqQlnM4M8dfqC-a78aFEQcINE",
  authDomain: "blogapp-4dc02.firebaseapp.com",
  databaseURL: "https://blogapp-4dc02-default-rtdb.firebaseio.com",
  projectId: "blogapp-4dc02",
  storageBucket: "blogapp-4dc02.firebasestorage.app",
  messagingSenderId: "578262816578",
  appId: "1:578262816578:web:9601afb948c63ea3529adb",
  measurementId: "G-CZYD26924T"
};
 */
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
};

const REALTIME_DATABASE=process.env.FIREBASE_REALTIME_DATABASE_URL;

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const database = getDatabase(app, REALTIME_DATABASE);

module.exports = {
    database,
    auth
};