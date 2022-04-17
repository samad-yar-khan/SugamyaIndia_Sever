/* mySeedScript.js */

// require the necessary libraries
const { faker } = require("@faker-js/faker");
const MongoClient = require("mongodb").MongoClient;
const env = require("../config/environment");

//define the number of seed etries to be added
const DATA_ITEMS_TO_INSERT = 100000;

const { getOneState } = require("../utilities/getRandomState");
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
  // Connection URL
  const uri = `mongodb+srv://samad:${env.db_pass}@cluster0.prvdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log("Connected successfully to server");
    const disability_collection = client
      .db("myFirstDatabase")
      .collection("disabilities");
    const disabeled_collection = client
      .db("myFirstDatabase")
      .collection("disabeleds");
    const collection = client.db("myFirstDatabase").collection("users");
    // console.log(collection)

    // The drop() command destroys all data from a collection.
    // Make sure you run it against proper database and collection.
    // collection.drop();

    // make a bunch of time series data
    let usersData = [];
    console.log("Creating new user data...\n");
    for (let i = 0; i < DATA_ITEMS_TO_INSERT; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = `${Date.now()}-${randomIntFromInterval(
        0,
        Date.now()
      )}-${faker.internet.email()}`;
      const newUser = {
        name_: `${firstName} ${lastName}`,
        email: email,
        password: faker.internet.password(),
        user_name: `${firstName}-${lastName}-${Date.now()}-${randomIntFromInterval(
          0,
          Date.now()
        )}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: email,
        udid: faker.datatype.uuid(),
        beneficiary: true,
        verified: faker.datatype.boolean(),
        phone_number: faker.phone.phoneNumber(),
        state: getOneState(),
      };
      usersData.push(newUser);
      console.log("*");
    }

    var result = await collection.insertMany(usersData);
    console.log("USER DATA CREATED!\n\n");

    //inserting disabilities data
    let disabilityData = [];
    let disabiltyIdArray = await disability_collection.find().toArray();
    console.log(disabiltyIdArray);
    console.log("Creating new disability data...\n");
    for (let i = 0; i < result.insertedCount; i++) {
      let randomDisabilityId =
        disabiltyIdArray[randomIntFromInterval(0, disabiltyIdArray.length - 1)]
          ._id;

      let newDisabled = {
        user: result.insertedIds[i],
        //assign random disability id from the disabilties database
        disability: randomDisabilityId,
        pending: false,
        approved: true,
      };
      disabilityData.push(newDisabled);
      console.log("*");
    }
    let res = await disabeled_collection.insertMany(disabilityData);
    console.log("DISABILITY DATA CREATED!\n\n");

    // console.log("Database seeded! :)");
    // client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB();
