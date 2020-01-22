// install and import express module or package
const exp=require('express');
const app=exp();
//install and import mongodb client module or package
const mc=require('mongodb').MongoClient;
//body parser
app.use(exp.json());
//install and import path module or package
const path=require('path');
//connecting to angular app
app.use(exp.static(path.join(__dirname,'./dist/exam')));
//to assign port no. to webserver(nodejs) by using listen method
const portno=233;
app.listen(portno,(error,result)=>{
    if(error){console.log(`there is a error in weserver connection ${error}`)}
    else{console.log(`hey port no ${portno} is lisenting ma...`)}
});
//db url
const dburl="mongodb+srv://sravani:sravani@cluster0-01yfu.mongodb.net/test?retryWrites=true&w=majority";

//connect to mongo server in cloud using url
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error){console.log("error during connecting to database",error)}
else {dbo=client.db("db1");
c=dbo.collection('collection1');
c1=dbo.collection("exam");
console.log("connected to data base db1(dbo) and collection1(c)")}});

//creating object id
oid=require("mongodb").ObjectID;
//register request handler 
app.post('/student/create',(req,res)=>{
    // to check whether the user name is existed or not
      c1.findOne({name:req.body.name},(error,obj)=>{
          if(error){console.log("error in reading",error)}
          else if(obj==null){
                      //student object is inserted
                     
                      c1.insertOne(req.body,(error,result)=>{
                          if(error){console.log('error in insert',error)}
                          res.send({msg:"registered successfully"})
                      }) 
                
          }
          //username already exist
          else {res.send({msg:"name already exit"})}
      })
  })
//read all
app.get('/allstudents',(req,res)=>{
    c1.find().toArray((error,result)=>{
        if(error){console.log("error in read operation",error)}
       else {
           res.send({msg:result});
       }
    })
})
//readit 
app.get(`/read/:name`,(req,res)=>{
    c1.findOne({name:req.params.name},(error,stdobj)=>{
        if(error){console.log("error in reading",error)}
        else {res.send({msg:stdobj})}
    })
 })

//edit a element
app.post('/edit/:id',(req,res)=>{
       console.log(req.params.id,req.body);
        c1.updateOne({_id:oid(req.params.id)},{$set:{name:req.body.name,email:req.body.email,phone:req.body.phone}},(error,result)=>{
            if(error){console.log("error in edited",error)} 
            else {res.send({msg:"successfully edited"})}  
        })
})

//delete a element
app.delete('/delete/:name',(req,res)=>{
            c1.deleteOne({name:req.params.name},(error,result)=>{
                if(error){console.log("error in delete lo find",error)} 
                else{
                    res.send({msg:"deleted sucessfully"})
                }
            })
})