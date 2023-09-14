var {MongoClient}=require('mongodb')
var dbur1="mongodb://127.0.0.1:27017"
var con =new MongoClient(dbur1)
var dbName="hospital"

async function rac1(){
    await con.connect()
    console.log("db connected")
    let mydb=con.db(dbName)
    let col=mydb.collection('patients')
    await col.updateOne({Department:'Ortho1'},{$set:{Department:'Cardio'}})
    // let data=await col.updateOne({name:'Putta'},{$set:{name:'Puttaswamy'}})
    // let data=await col.updateOne({Ward_No:'2'},{$set:{Ward_No:'002'}})
    console.log('Updated')
}
rac1()