const { MongoClient } = require('mongodb');

const uri = 'mongodb://admin:password123@localhost:27017';
const dbName = 'puzzledb';

async function seedDatabase() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);

    // Clear existing data
    await db.collection('puzzles').deleteMany({});

    // Seed data
    const puzzles = await db.collection('puzzles').insertMany([

      {
        sentence: "This is seed data for MongoDB.",
        word: "seed",
        img: "seed.jpg"
      },
      {
        sentence: "The quick brown fox jumps over the lazy dog.",
        word: "fox",
        img: "fox.jpg"
      }

    ]);
    console.log(`${puzzles.insertedCount} puzzles inserted`);

    // Create indexes
    await db.collection('puzzles');
    console.log('Indexes created');

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
