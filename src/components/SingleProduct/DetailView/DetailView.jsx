import React from 'react'
import styles from '../DetailView/DetailView.module.css'
import Rating from '../../Rating/Rating'
import ButtonMain from '../../ButtonMain/ButtonMain'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGoogle } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import useBreakpoint from '../../../shared/hooks/useBreakpoint'

const DetailView = () => {
    const bp = useBreakpoint();
  return (
    <div className={`${bp.moreThan("md") ? styles.dflex : styles.dblock}`}>
        <div className={`${styles.img_container}`}>
            <img src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8e%2Fbd%2F8ebdd2a3c55a4bafa2c250bfc46db2bb656180a5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]" alt="Clothing product" />
        </div>

        <div className={`${styles.right_wrapper}`}>
            <h2 className={`${styles.mb_1}`}>Knitted sweater with stripes</h2>
            <Rating className={`${styles.mb_2}`}/>
            <p className={`${styles.price} ${styles.mb_1}`}>299,00 kr</p>
            <p className={`${styles.mb_2}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente perspiciatis rem dolor suscipit facere asperiores illum sunt odio, labore similique est magnam animi, atque impedit.</p>
            
            <div className={`${styles.sizes_wrapper} ${styles.dflex} ${styles.mb_2} `}>
                <p className={`${styles.mr_1} ${styles.size_txt}`}>Size:</p>
                <div className={`${styles.size}`}>S</div>
                <div className={`${styles.size}`}>M</div>
                <div className={`${styles.size}`}>L</div>
                <div className={`${styles.size}`}>XL</div>
            </div>

            <div className={`${styles.dflex} ${styles.color_wrapper} ${styles.mb_2}`}>
                <p className={`${styles.mr_1} ${styles.mt_05}`}>Color:</p>
                <select className={`${styles.select}`}>
                    <option value="">Choose an Option</option>
                    <option value="">Black</option>
                    <option value="">White</option>
                    <option value="">Blue</option>
                    <option value="">Green</option>
                    <option value="">Red</option>
                    <option value="">Pink</option>
                    <option value="">Purple</option>
                    <option value="">Yellow</option>
                </select>
            </div>

            <div className={`${styles.dflex} ${styles.mb_2}`}>
                <p className={`${styles.mr_2} ${styles.mt_05}`}>Qty:</p>
                
                <div className={`${bp.moreThan("md") ? styles.dflex : styles.dblock}`}>
                    <div className={`${styles.quantity} ${styles.dflex} ${styles.mr_2}`}>
                        <button className={`${styles.btn_qty}`}>-</button><p className={`${styles.qty_nr}`}>1</p><button className={`${styles.btn_qty}`}>+</button>
                    </div>

                    <ButtonMain 
                    className={`${bp.moreThan("md") ? styles.p_0 : styles.mt1_p0}`}
                    text="Add To Cart"
                    align = "left"
                    onClick={() => console.log("test")} />  
                </div>
            </div>

            <div className={`${styles.dflex}`}>
                <p className={`${styles.mr_1} ${styles.mt_05}`}>Share:</p>
                <div className={`${styles.link}`}><FaFacebookF/></div>
                <div className={`${styles.link}`}><FiInstagram/></div>
                <div className={`${styles.link}`}><AiOutlineTwitter/></div>
                <div className={`${styles.link}`}><AiOutlineGoogle/></div>
                <div className={`${styles.link}`}><AiFillLinkedin/></div>
            </div>
        </div>
    </div>
  )
}

export default DetailView