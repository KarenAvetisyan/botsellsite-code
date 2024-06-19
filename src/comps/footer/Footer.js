import React from 'react'
import './footer.css'
import Image from '../image/Image'
import fb_icon from '../../assets/images/fb-icon.svg'
import x_icon from '../../assets/images/x-icon.svg'
import instagram_icon from '../../assets/images/instagram-icon.svg'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__top'>
          <div className='container'>
              <h4>Получать эксклюзивные<br/> предложения</h4>
              <div className='contact__form'>
                  <form>
                      <input className='input__field' type='email' placeholder='Your email address' required/>
                      <input className="submit" type='submit' value='Подписаться' />
                  </form> 
              </div>
          </div>
        </div>
        <div className='footer__bottom'>
          <div className='container'>
            <div className='social__box'>
                <div className='social'>
                    <a href=''><Image img__src={fb_icon} /></a>
                    <a href=''><Image img__src={x_icon} /></a>
                    <a href=''><Image img__src={instagram_icon} /></a>
                </div>
                <p>© 2023 TarastovDevs</p>
            </div>
          </div>
        </div>
    </footer>
  )
}
