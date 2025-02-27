require('dotenv').config();
const express = require('express');
const app = express();
const PORT =  process.env.PORT || 8082;
// TODO : Cambiar puerto siempre
// const PORT = 8084;
const PostRoutes = require('./routers/postsRoutes');
const UserRoutes = require('./routers/userRoutes');
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use("/posts",PostRoutes);
app.use('/users', UserRoutes);

app.get("/",(req,res)=>{
    res.send("OK");
});

app.listen(PORT,(err)=>{
    if (err) {
        throw err
    }
    console.log(`Server running on http://localhost:${PORT}`);
});