
const posts = {
  posts: [
      {
          id: '1',
          date: 'Dec 18, 2020',
          category: 'Laravel',
          author: 'Tushar Matt',
          title: 'How often do you sneze?',
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
          id: '2',
          date: 'Jan 1, 2021',
          category: 'Laravel',
          author: 'Tushar Matt',
          title: 'The magic of unseen life - short story',
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      },
      {
          id: '3',
          date: 'Jan 7, 2021',
          category: 'Laravel',
          author: 'Tushar Matt',
          title: 'What you do not care to fear - walkthrough',
          content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
      }
  ]
}


export default function handler(req, res) {
    const {
      query: { id },
    } = req;
    const post = posts.posts.filter(post => post.id === id)[0];
    res.json({post});
}