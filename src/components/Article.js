import React from 'react'

function Article(props) {
  const { title, date = "January 1, 1970", preview, minutes } = props;

  // Calculate the number of coffee cups or bento boxes based on the estimated time to read
  let cupsOrBoxes = null;
  if (minutes < 30) {
    cupsOrBoxes = '☕️'.repeat(Math.ceil(minutes / 5));
  } else {
    cupsOrBoxes = '🍱'.repeat(Math.ceil(minutes / 10));
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {cupsOrBoxes} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article;
