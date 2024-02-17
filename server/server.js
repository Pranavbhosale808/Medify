const express = require('express');
const app = express();
const authRoute  = require('./router/auth-route');
const conatactRoute = require('./router/contact-router')
const vendorRoute = require('./router/vendor-router')
const connectionDB = require('./utils/db');
const errorMiddleware = require('./middlevare/error-middleware')
const cors=require('cors');

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"POST ,GET, DELETE, PATCH, HEAD",
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api",authRoute);
app.use("/api",conatactRoute);
app.use('/api',vendorRoute);

app.use(errorMiddleware);


const PORT = 5000;
connectionDB().then(()=>{
app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})
});