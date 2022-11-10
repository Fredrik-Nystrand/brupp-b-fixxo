import React, {useState} from 'react'
import styles from './Popup.module.css'
import KeepTouch from '../../assets/Popup/KeepInTouch.png'
import ButtonMain from '../ButtonMain/ButtonMain'
import useBreakpoint from "../../shared/hooks/useBreakpoint"


function Popup({setClose}) {
 

  return (

    <div className={`${styles.popwrapper}`}>
        <div className={`${styles.modal} container-inner p-2`}>

            <button onClick={() => setClose(true)} className={`${styles.close} `}>X</button>

            <div className={`${styles.modalContent}`}>

                <div className={`${styles.top}  `}>
                    <img src={KeepTouch} alt="" className={`${styles.img}`}/>
                        <div className={`${styles.centered}`}>
                            <h3 className="">Let's Keep In Touch</h3>
                        </div>
                </div>

                <div className={`${styles.text} mt-1`}>
                    <h1 className={`${styles.header}`}>Get 20% Off</h1>
                    <p>Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten any chatty.</p>
                </div>     
                <input className={`${styles.input} mt-2 mb-1`} type="text" placeholder='Enter Your Email' />          
                    <ButtonMain
                    text="sign up now"
                    onClick={() => console.log("sign up now")}
                    />
            
            </div>     
        </div>
    </div>
  )
}

export default Popup