import React from 'react'

function About(props) {
  const {imgSrc = 'https://via.placeholder.com/215', aboutText} = props;
  return (
    <aside>
      <img src={imgSrc} alt='blog logo' />
      <p>{aboutText}</p>
    </aside>
  )
}

export default About;
