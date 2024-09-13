import express, { json } from "express";
import CryptoJS from "crypto-js";
import { SHA256 } from "crypto-js";

const app = express();
app.use(express.json());

app.get("/",(req,res) => {
    console.log("hi there");
    return res.json({
        message: "All check's passed"
    })
})

app.listen(3000,()=>{
    console.log('server started at port 3000');
    
})