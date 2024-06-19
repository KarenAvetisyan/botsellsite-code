import React from 'react'
import Image from '../image/Image'
import './card.css'

export default function Card({bgUrl, text, overlay}) {
  return (
    <div className='card--item' style={{backgroundImage: `url(${bgUrl})`}}>
        <div className='card__overlay' style={{backgroundColor: overlay}}></div>
        <p>{text}</p>
    </div>
  )
}
