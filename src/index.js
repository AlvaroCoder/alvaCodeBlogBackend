require('dotenv').config();
const express = require('express');
const app = express();
const { initializeApp } = require('firebase/app');
const { getAnalytics } = require('firebase/analytics')
const PORT =  process.env.PORT || 3000;
// TODO : Cambiar puerto siempre
// const PORT = 8084;
const PostRoutes = require('./routers/postsRoutes');
const cors = require('cors');
const morgan = require('morgan');

const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
};

const appFirebase = initializeApp(firebaseConfig);


app.use(cors());
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use("/posts",PostRoutes);

app.get("/",(req,res)=>{
    res.send("OK");
});

app.listen(PORT,(err)=>{
    if (err) {
        throw err
    }
    console.log(`Server running on http://localhost:${PORT}`);
});