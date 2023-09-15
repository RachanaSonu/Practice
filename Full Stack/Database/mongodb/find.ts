var {MongoClient}=require('mongodb')
var dbur1="mongodb://127.0.0.1:27017"
var con =new MongoClient(dbur1)
var dbName="hospital"

async function rac3(){
    await con.connect()
    console.log("db connected")
    let mydb=con.db(dbName)
    let col=mydb.collection('patients')
    // let data=await col.find({Department:'Ortho'}).toArray()
    let data=await col.find({name:'Rachana'}).toArray()
    console.log(data)
}
rac3()