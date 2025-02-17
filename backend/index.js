const express = require('express')
const app = express()
const cors=require('cors')
const AuthRouter = require('./Routes/AuthRouter.js')
const ProductRouter = require('./Routes/ProductRouter')
require('dotenv').config();
require('./Models/db.js');
const PORT=process.env.PORT;
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

app.use(cors());
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);
app.get('/ping',(req,res)=>{
    res.send('PONG');
})