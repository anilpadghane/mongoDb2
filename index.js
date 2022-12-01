const { MongoClient } = require('mongodb');
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

async function main(){
    let data =  await client.connect()
    let db = data.db('Human_Resource');
    
    let collection = db.collection('employee');
    console.log(collection);


    // Q.1) List all the document 
     const findResult = await collection.find({}).toArray();
            console.log('Found documents =>', findResult);



    // Q.2)print salary more than 30000
     const salary = await collection.find({salary:{$gt:'30000'}}).toArray();
            console.log('Found documents =>', salary);




// Q.3) having experince more than 2 years
 const experince = await collection.find({overallExp:{$gt:'2'}}).toArray();
 console.log('Found documents =>', experince);




//Q.4) who grad afetr 2015 and having more than exp 1 year
 const yearGrad = await collection.find({$and: [{yearGrad:{$gt:'2015'}}, {overallExp:{$gt:'1'}}]}).toArray();
  console.log('Found documents =>', yearGrad);




// Q.5) update salary whose greater than 70000 to 65000
 const update = await collection.updateMany({salary:{$set:{$and:[{salary:{$gt:'70000'}}, {salary:{$lt:'65000'}}]}}});
  console.log('Found documents =>', update);




  
// Q.6) Delete all documents where companay is Y

const Delete = await collection.deleteMany({ lastCompany: "Y" });
  console.log('Found documents =>', Delete);

    
}
main()