import React from 'react'
import {ImageGaming, ImageRetro, ImageTop } from '../assets'

function Article() {

  const dataArticle = [
    {
      image: ImageRetro,
      number: '01',
      title: ' Reviving Retro PCs',
      text: 'What happens when old PCs are given modern upgrades?'
    },
    {
      image: ImageTop,
      number: '02',
      title: 'Top 10 Laptops of 2022',
      text: 'Our best picks for various needs and budgets.'
    },
    {
      image: ImageGaming,
      number: '03',
      title: 'The Growth of Gaming',
      text: 'How the pandemic has sparked fresh opportunities.'
    }
  ]

  return (
    <div className='article-section'>
      {dataArticle.map((article, key) => (
        <div className='article' key={key}>
          <img src={article.image} alt="preview-article"/>
          <div>
            <h2>{article.number}</h2>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Article