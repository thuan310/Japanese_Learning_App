
const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;


const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'jpdict'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error: ', err);
    return;
  }
  console.log('Database connected...');
});


app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const formatCourseData = (courses, chapters, contents) => {
    return courses.map(course => {
      const courseChapters = chapters.filter(ch => ch.courseId === course.id).map(ch => {
        const chapterContents = contents.filter(cont => cont.chapterId === ch.id).map(cont => ({
          title: cont.title,
          description: cont.description,
          image: cont.imagePath,
          sound: cont.soundPath
        }));
        return {
          title: ch.title,
          content: chapterContents
        };
      });
  
      return {
        id: course.id,
        title: course.title,
        name: course.name,
        description: course.description,
        images: course.imagePath,
        chapter: courseChapters
      };
    });
};

// Endpoint to get writing courses
app.get('/writingCourses', (req, res) => {
const courseQuery = 'SELECT * FROM writingCourses';
const chapterQuery = 'SELECT * FROM chapter';
const contentQuery = 'SELECT * FROM chapterContent';

db.query(courseQuery, (err, courses) => {
    if (err) {
    console.error('Error fetching courses: ', err);
    res.status(500).send('Server error');
    return;
    }

    db.query(chapterQuery, (err, chapters) => {
    if (err) {
        console.error('Error fetching chapters: ', err);
        res.status(500).send('Server error');
        return;
    }

    db.query(contentQuery, (err, contents) => {
        if (err) {
        console.error('Error fetching contents: ', err);
        res.status(500).send('Server error');
        return;
        }

        const formattedData = formatCourseData(courses, chapters, contents);
        res.json(formattedData);
    });
    });
});
});

app.get('/words', (req, res) => {
  const wordsQuery = 'SELECT * FROM words';
  const meaningsQuery = 'SELECT * FROM meanings';
  const examplesQuery = 'SELECT * FROM examples';

  db.query(wordsQuery, (err, words) => {
    if (err) {
      console.error('Error fetching words: ', err);
      res.status(500).send('Server error');
      return;
    }

    db.query(meaningsQuery, (err, meanings) => {
      if (err) {
        console.error('Error fetching meanings: ', err);
        res.status(500).send('Server error');
        return;
      }

      db.query(examplesQuery, (err, examples) => {
        if (err) {
          console.error('Error fetching examples: ', err);
          res.status(500).send('Server error');
          return;
        }

        const formattedData = words.map(word => {
          const wordMeanings = meanings.filter(m => m.wordID === word.id).map(m => m.meaning);
          const wordExamples = examples.filter(ex => ex.wordID === word.id).map(ex => ({
            example: ex.example,
            meaning: ex.meaning
          }));

          return {
            id: word.id,
            word: word.word,
            reading: word.reading,
            meanings: wordMeanings,
            examples: wordExamples
          };
        });

        res.json(formattedData);
      });
    });
  });
});

IPADDRESS = "192.168.100.5"
  
app.listen(port, IPADDRESS, () => {
  console.log(`Server running at http://${IPADDRESS}:${port}/`);
});

