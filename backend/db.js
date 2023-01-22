

const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://dipeshsingh:9125635198@cluster0.o3qxbip.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('connection success')
}).catch((err)=>{
    console.log('not conected');
})
