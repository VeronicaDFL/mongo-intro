import {client, fruitsCollection } from '../mongoConnect'
const addFruits = async () => {
    const myFruit = {
      name: "Grape",
      taste: "sweet",
      price: 4,
      stock: 10,
    };
    try {
      await client.connect();
      const addedFruit = await fruitsCollection.insertOne(myFruit);
      console.log(addedFruit);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  };
  
  addFruits()