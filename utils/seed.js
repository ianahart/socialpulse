const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { faker } = require('@faker-js/faker');

const dropCollectionIfExists = async (collection) => {
  const existingCollection = await connection.db.listCollections({ name: collection }).toArray();

  if (existingCollection.length) {
    await connection.dropCollection(collection);
  }
};

const createThought = async (username) => {
  const thought = new Thought({
    thoughtText: faker.lorem.sentence(),
    username,
  });

  await Thought.create(thought);

  return thought;
};

const createUsers = async (numOfUsers) => {
  let users = [];

  for (let i = 0; i < numOfUsers; i++) {
    users.push(
      new User({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        thoughts: [],
        friends: [],
      })
    );
  }

  for (let i = 0; i < users.length; i++) {
    const friend = i < users.length - 1 ? users[i + 1] : users[0];
    users[i].friends.push(friend);
    const thought = await createThought(users[i].username);
    users[i].thoughts.push(thought);
    await users[i].save();
  }
};

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected to MongoDB...');

  await dropCollectionIfExists('users');
  await dropCollectionIfExists('thoughts');

  await createUsers(10);
  console.log('Finished seeding users with thoughts...');

  process.exit(0);
});
