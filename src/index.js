import 'dotenv/config';
import express from 'express';
import cors from 'cors';
// 
//  import saySomeThing from './another'

// console.log('this is my first app using express');
// console.log(process.env.MY_SECRET);
// saySomeThing();
//
 const app=express();
 app.use(cors());
// app.listen(3000,()=>{ 
//     console.log('example app running on port 30000');
// })
app.get('/run',(req,res)=>{ 
   return res.send('Helllo world!Dummy text');
});
app.post('/run',(req,res)=>{
    return res.send('Received a POST HTTP method');
});
app.put('/run',(req,res)=>{
   return res.send('Received a PUT HTTP method');
});
app.delete('/run',(res,req)=>{
   return res.send('Received a DELETE HTTP method');
});
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`);
});