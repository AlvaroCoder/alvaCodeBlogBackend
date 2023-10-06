require('dotenv').config();
const express = require('express');
const app = express();
const PORT =  8080;
const PostRoutes = require('./routers/postsRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json())

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