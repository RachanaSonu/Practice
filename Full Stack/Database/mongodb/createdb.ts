var {MongoClient}=require('mongodb')
var dbur1="mongodb://127.0.0.1:27017"
var con =new MongoClient(dbur1)
var dbName="hospital"

async function rac(){
    await con.connect()
    console.log("db connected")
    let mydb=con.db(dbName)
    let col=mydb.collection('patients')
    await col.insertOne({name:'Putta',Ward_No:'4',Department:'Ortho1'})
    console.log('inserted')
}
rac()