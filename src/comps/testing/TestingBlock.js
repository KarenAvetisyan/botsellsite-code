import React from 'react'
import { useState } from 'react'
import './testing.css'
import Image from '../image/Image'
import icon__shop from '../../assets/images/shop.png'
import icon__automobile from '../../assets/images/automobile.png'
import icon__salon from '../../assets/images/salon.png'
import icon__jim from '../../assets/images/jim.png'
import icon__nedvijimost from '../../assets/images/nedvijimost.png'
import icon__bank from '../../assets/images/bank.png'

export default function TestingBlock() {
  const [status, setStatus] = useState('Статус');
  const [select, setSelect] = useState('Выберите роль ИИ');
  const [selectedImage, setSelectedImage] = useState();
  const options = [
    {icon: icon__shop, optionText: 'Менеджер в сфере розничной торговли'},
    {icon: icon__automobile, optionText: 'Менеджер в автомобильном диллерском центре'},
    {icon: icon__salon, optionText: 'Менеджер в салоне красоты'},
    {icon: icon__jim, optionText: 'Менеджер в фитнес клубе'},
    {icon: icon__nedvijimost, optionText: 'Менеджер в агенстве недвижимости'},
    {icon: icon__bank, optionText: 'Менеджер в банковской сфере'},
  ]
  const [selectWrapClassActive, setSelectWrapClassActive ] = useState(false)

  const handleToggleSelect = () => {
    setSelectWrapClassActive(!selectWrapClassActive)
  }

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
                            <div className={`select_wrap ${selectWrapClassActive?'active':''}`}>
                                <ul className="default_option">
                                    <li onClick={()=>handleToggleSelect()}>
                                        <div className="option pizza">
                                            <div className="icon"><Image img__src={selectedImage} /></div>
                                            <p>{select}</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="select_ul">
                                    {options.map((o, index)=>{
                                        return (
                                        <li key={index} onClick={()=>{setSelect(o.optionText); setSelectedImage(o.icon); setSelectWrapClassActive(false)}}>
                                            <div className="option">
                                                <div className="icon"> <Image img__src={o.icon} /> </div>
                                                <p>{o.optionText}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
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
