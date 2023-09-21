import React from 'react'

function News() {

  const dataText = [
    {title: 'Hydrogen vs Electric Cars', text: 'Will hydrogen-fueled cars ever catch up to EVs?'},
    {title: 'The Downsides of AI Artistry', text: 'What are the possible adverse effects of on-demand AI image generation?'},
    {title: 'Is VC Funding Drying Up?', text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'}
  ]

  return (
    <div className='block-info'>
      <h2>New</h2>
      {dataText.map((content, key) => (
        <div key={key}>
          <h3>{content.title}</h3>
          <p>{content.text}</p>
        </div>
      ))}
    </div>
  )
}

export default News