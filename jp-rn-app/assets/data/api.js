import { useState, useEffect } from 'react';

const ADDRESS = 'http://192.168.100.5:3000';

const writingCourseAPI = `${ADDRESS}/writingCourses`;
const allWordsAPI = `${ADDRESS}/words`;
const categoriesAPI = `${ADDRESS}/writingCourses`;

export const useFetchData = () => {
  const [writingCourses, setWritingCourses] = useState([]);
  const [jlptCourses, setJlptCourses] = useState([]);
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          fetch(writingCourseAPI),
          fetch(allWordsAPI),
          fetch(categoriesAPI),
        ]);

        if (!response1.ok || !response2.ok || !response3.ok) {
          throw new Error('Failed to fetch data');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const processedWritingCourses = data1.map(course => ({
          id: course.id,
          title: course.title,
          name: course.name,
          description: course.description,
          images: course.image, 
          chapter: course.chapter.map(chapter => ({
            title: chapter.title,
            content: chapter.content.map(content => ({
              title: content.title,
              description: content.description,
              image: content.image, 
              sound: content.sound 
            }))
          }))
        }));

        const processedJlptCourses = data3.map(course => ({
          title: course.title,
          name: course.name
        }));

        const processedAllWords = data2.map(word => ({
          id: word.id,
          word: word.word,
          reading: word.reading,
          meanings: word.meanings,
          examples: word.examples.map(example => ({
            example: example.example,
            meaning: example.meaning
          }))
        }));

        setWritingCourses(processedWritingCourses);
        setJlptCourses(processedJlptCourses);
        setWords(processedAllWords);


      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { writingCourses, jlptCourses, words, loading, error };
};
