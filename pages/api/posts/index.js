// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from 'mongoose';
import Post from '../../../models/Post';

const connect = () => {
    if (mongoose.connections[0].readyState) {
        console.log(`mongodb already connected`);
        return;
    }
    mongoose.connect(process.env.URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    mongoose.connection.on('connected', () => console.log(`Connected to mongodb`));
    mongoose.connection.on('error', (err) => console.log(`Error connecting..`, err));
}

// connect to mongodb
connect();



// all posts
const posts = {
  posts: [
      {
        "id": "1",
        "date": "Jan 7, 2021",
        "category": "Laravel",
        "author": "Tushar Matt",
        "title": "What you do not care to fear - walkthrough",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
        "id": "2",
        "date": "Jan 7, 2021",
        "category": "Laravel",
        "author": "Tushar Matt",
        "title": "What you do not care to fear - walkthrough",
        "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      },
      {
          "id": "3",
          "date": "Jan 7, 2021",
          "category": "Laravel",
          "author": "Tushar Matt",
          "title": "What you do not care to fear - walkthrough",
          "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      }
  ]
}

export default async (req, res) => {
  res.status(200);
  res.json({posts});
}
