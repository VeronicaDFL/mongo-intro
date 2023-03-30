import { client, fruitsCollection } from "../mongoConnect"

const getAllFruits = async () => {
    try {
      await client.connect();
      const allfruits = await collection.find().toArray();
      console.log(allFruits);
    } catch (error) {
      console.log(error);
    } finally {
      await client.close();
    }
  }
    
  getAllFruits();