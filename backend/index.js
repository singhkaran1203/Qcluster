const dotenv=require('dotenv')
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express()
const port =process.env.PORT || 80;
require('./db');
dotenv.config();
const authRouter=require('./routes/auth')
const questionRouter=require('./routes/question')
const answerRouter=require('./routes/answer')
const commentRouter=require('./routes/comment')

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json()); 
app.use(cors());
app.use('/api/auth',authRouter)
app.use('/api/question',questionRouter)
app.use('/api/answer',answerRouter)

app.use('/api/comment',commentRouter)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
 