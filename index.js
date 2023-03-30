import { client } from './mongoConnect.js';

// connect to db - or create if there is none

const addFruits = async () => {
  const myFruit = {
    name: "Grape",
    taste: "sweet",
    price: 4,
    stock: 10,
  };
  try {
    await client.connect();
    const addedFruit = await collection.insertOne(myFruit);
    console.log(addedFruit);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

addFruits()





const deleteFruit = async () => {
  try {
    await client.connect()
    const itemDeleted = await collection.deleteOne({ name: "Pinapple" });
    console.log(itemDeleted);
} catch (error) {
    console.log(error)
} finally {

await client.close();
}
}
// deleteFruit()
