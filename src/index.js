require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8086;
const PostRoutes = require('./routers/postsRoutes');
app.use("/posts",PostRoutes)

app.get("/",(req,res)=>{
    res.send("OK");
});

app.listen(PORT,(err)=>{
    if (err) {
        throw err
    }
    console.log(`Server running on http://localhost:${PORT}`);
});