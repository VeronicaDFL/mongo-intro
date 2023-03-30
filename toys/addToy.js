import {client, toysCollection} from '../mongoConnect.js'

client.connect()

const addToy =  async () => {
// get collection?

const myToy = {
    name: 'Truck',
    type: 'toys on wheels',
    cool: true,
    price: 15,
    description: 'Working Truck'

}

const addedToy = await toysCollection.insertOne(myToy)
console.log()
}
// addToy()

const editToy = async () => {

const updateToy = await toysCollection.findOneAndUpdate(

   { name: 'Mini Ferrari'},
   {$set: {description: 'car'}}
)
   console.log(updateToy)
}

editToy()

const getAllTheToys = async () => {

try { 
    
    await client.connect()
    const allToys =  await toysCollection.find().toArray()
    console.log(allToys)

    
} catch (error) {
    console.log(error)
    
}finally{
    await client.close()

}

}
// getAllTheToys()