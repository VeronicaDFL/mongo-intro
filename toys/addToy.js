import {client, toysCollection} from '../mongoConnect.js'

client.connect()

const addToy =  async () => {
// get collection?

const myToy = {
    name: 'Optimus Prime',
    type: 'Trasformer',
    cool: true,
    price: 40,
    description: 'Leader Autobot'
}

const addedToy = await toysCollection.insertOne(myToy)
console.log()
}
addToy()