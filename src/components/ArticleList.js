import React from 'react';
import Article from './Article';

const ArticleList = ({ posts }) => {
  return (
    <main>
      {posts.map((post) => {
        // Calculate the estimated time to read based on the length of the article
        const wordsPerMinute = 200;
        const lengthInWords = post.preview.split(' ').length;
        const minutes = Math.ceil(lengthInWords / wordsPerMinute);

        return (
          <Article 
            key={post.id} 
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={minutes} />
        )
      })}
    </main>
  );
};

export default ArticleList;
