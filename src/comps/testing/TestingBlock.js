import React from 'react'
import { useState } from 'react'
import './testing.css'

export default function TestingBlock() {
  const [status, setStatus] = useState('Статус');

  return (
    <section className='sc-testing'>
        <div className='title'>
            <div className='container'>
                <h2>Вы можете протестировать работу ИИ менеджеров на сайте</h2>
            </div>
        </div>
        <div className='container'>
            <div className='test__form'>
                <div className='form__box'>
                    <form>
                        <div className='form__head'>
                            <span className='status'>{status}</span>
                            <select defaultValue={'Выберите роль ИИ'}>
                                <option disabled>Выберите роль ИИ</option>
                                <option>роль 1</option>
                                <option>роль 2</option>
                                <option>роль 3</option>
                            </select>
                        </div>
                        <div className='form__body'>

                        </div>
                        <div className='form__bottom'>
                            <div className='field'>
                                <input type='text' placeholder='Введите запрос' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
