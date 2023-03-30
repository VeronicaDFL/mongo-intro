import {client, fruitsCollection} from '../mongoConnect.js'

const editFruit = async () => {
    // collection.findOne({name: 'Cantaloupe'})
    const updatedFruit = await fruitsCollection.findOneAndUpdate(
      { name: "Cantaloupe" },
      { $set: { name: "Pinapple", special: true } }
    );
    console.log(updatedFruit);
  };
  
  editFruit()