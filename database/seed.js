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


    // Seed quiz data
    const quizzes = [
      {
        name: "demo",
        meta: "Random quiz 2025",
        questions: [
          {
            question: "What is the best pet?",
            options: [
              { label: "Cat", correct: false },
              { label: "Dog", correct: true },
              { label: "Turtle", correct: false },
              { label: "Snake", correct: false }
            ]
          },
          {
            question: "What is the fastest car?",
            options: [
              { label: "Ford", correct: false },
              { label: "Toyota", correct: true },
              { label: "Audi", correct: false },
              { label: "Saab", correct: false }
            ]
          },
          {
            question: "What is the most beautiful color?",
            options: [
              { label: "Green", correct: false },
              { label: "Red", correct: true },
              { label: "Yellow", correct: false },
              { label: "Blue", correct: false }
            ]
          }
        ]
      },
      {
        name: "quiz",
        meta: "Demo quiz 2025",
        questions: [
          {
            question: "Which planet is known as the Red Planet?",
            options: [
              { label: "Earth", correct: false },
              { label: "Mars", correct: true },
              { label: "Jupiter", correct: false },
              { label: "Venus", correct: false }
            ]
          },
          {
            question: "Who wrote 'Romeo and Juliet'?",
            options: [
              { label: "William Shakespeare", correct: true },
              { label: "Charles Dickens", correct: false },
              { label: "Jane Austen", correct: false },
              { label: "Mark Twain", correct: false }
            ]
          },
          {
            question: "What is the capital of France?",
            options: [
              { label: "Berlin", correct: false },
              { label: "Madrid", correct: false },
              { label: "Paris", correct: true },
              { label: "Rome", correct: false }
            ]
          }
        ]
      }
    ];
    const result = await db.collection('quizzes').insertMany(quizzes);
    console.log(`${result.insertedCount} quizzes inserted`);

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
