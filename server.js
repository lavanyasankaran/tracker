const express =require("express");
const connectDB = require("./config/db");
const app =express();

connectDB();
app.use(express.json({extended:false}));
app.get('/',(req,res) =>res.send("API Running"));


app.use('/api/users',require('./config/routes/api/users'));
app.use('/api/auth',require('./config/routes/api/auth'));
const PORT =process.env.port || 5000;

app.listen(PORT,() =>console.log(`server started on ${PORT}`));