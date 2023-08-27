const express= require("express")
const cors= require("cors")
const dotenv= require("dotenv").config()
const connectToDatabase = require("./connection/database")
const adminRoutes= require("./routes/adminRoutes")




const app= express()

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PATCH","DELETE"],
    credentials:true,

}))

app.use(express.json());
connectToDatabase()



app.use('/public/images',express.static('public/images'))
app.use('/admin',adminRoutes)




const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server running on ${PORT} `);
})