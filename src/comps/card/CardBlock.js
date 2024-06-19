import React from 'react'
import './card.css'
import Card from './Card'
import card__img_1 from "../../assets/images/card-1-img.webp"
import card__img_2 from "../../assets/images/card-2-img.webp"
import card__img_3 from "../../assets/images/card-3-img.webp"

export default function CardBlock() {
  return (
    <section className='sc-cards'>
        <div className='container'>
            <div className='cards__wrap'>
                <Card 
                overlay={'#1E5449'}
                bgUrl={card__img_1}
                text={'Автоматизация процессов на основе искусственного интеллекта.'} />
                <Card 
                overlay={'#EA8056'}
                bgUrl={card__img_2}
                text={'Внедрение системы управления искусственным интеллектом'} />
                <Card 
                overlay={'#000000'}
                bgUrl={card__img_3}
                text={'Анализ данных и интерпретация с использованием искусственного интеллекта.'} />
            </div>
        </div>
    </section>
  )
}
