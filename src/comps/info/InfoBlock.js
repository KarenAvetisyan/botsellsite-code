import React from 'react'
import './info.css'
import robotImg_1 from '../../assets/images/robot-1-img.webp'
import robotImg_2 from '../../assets/images/robot-2-img.webp'
import Image from '../image/Image'
 
export default function InfoBlock() {
  return (
    <section className='sc-info'>
        <div className='container'>
            <div className='info__title'>
                Искусственный интеллект в бизнесе интегрирует<br/>
                передовые технологии искусственного интеллекта в<br/>
                корпоративные структуры, создавая интеллектуальных<br/>
                менеджеров на основе ИИ для улучшения процесса<br/>
                принятия решений.
            </div>
            <div className='info__wrap img__left'>
                <div className='img__box'>
                    <Image img__src={robotImg_1} />
                </div>
                <div className='info__text'>
                    <h4>Обгоняйте конкурентов с помощью принятия решений на основе искусственного</h4>
                    <p>Искусственный интеллект в бизнесе трансформирует вашу компанию
                    путем внедрения AI-менеджеров, которые обеспечивают мгновенные,
                    основанные на данных решения, значительно превосходящие
                    традиционные подходы к управлению.</p>
                </div>
            </div>
            <div className='info__wrap img__right'>
                <div className='img__box'>
                    <Image img__src={robotImg_2} />
                </div>
                <div className='info__text'>
                    <h4>Безупречно автоматизируйте управленческие задачи для оптимальной эффективности.</h4>
                    <p>Искусственный интеллект в бизнесе умные менеджеры
                    оптимизируют ваши операции. Они используют искусственный
                    интеллект для автоматизации задач, повышая эффективность и
                    производительность вашей команды без проблем.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
