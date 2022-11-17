import { useEffect } from "react"
import styles from "../DetailView/DetailView.module.css"
import Rating from "../../Rating/Rating"
import ButtonMain from "../../ButtonMain/ButtonMain"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiOutlineGoogle } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import useBreakpoint from "../../../shared/hooks/useBreakpoint"

const DetailView = ({ product }) => {
  const bp = useBreakpoint()

  return (
    <div className={`${bp.moreThan("md") ? styles.dflex : styles.dblock}`}>
      <div className={`${styles.img_container}`}>
        <img src={product?.imgUrl} alt="Clothing product" />
      </div>

      <div className={`${styles.right_wrapper}`}>
        <h2 className={`${styles.mb_1}`}>{product?.name}</h2>
        <Rating value={product?.rating} className={`${styles.mb_2}`} />
        <p className={`${styles.price} ${styles.mb_1}`}>
          {product?.salePrice ? product?.salePrice : product?.price}.00 kr
        </p>
        <p className={`${styles.mb_2}`}>{product?.description}</p>

        <div className={`${styles.sizes_wrapper} ${styles.dflex} ${styles.mb_2} `}>
          <p className={`${styles.mr_1} ${styles.size_txt}`}>Size:</p>
          {product?.sizes.map((size) => (
            <div key={size.id} className={`${styles.size}`}>
              {size.size}
            </div>
          ))}
        </div>

        <div className={`${styles.dflex} ${styles.color_wrapper} ${styles.mb_2}`}>
          <p className={`${styles.mr_1} ${styles.mt_05}`}>Color:</p>
          <select className={`${styles.select}`}>
            <option value="">Choose an Option</option>
            {product?.colors.map((color) => (
              <option key={color.id} value="">
                {color.color}
              </option>
            ))}
          </select>
        </div>

        <div className={`${styles.dflex} ${styles.mb_2}`}>
          <p className={`${styles.mr_2} ${styles.mt_05}`}>Qty:</p>

          <div className={`${bp.moreThan("md") ? styles.dflex : styles.dblock}`}>
            <div className={`${styles.quantity} ${styles.dflex} ${styles.mr_2}`}>
              <button className={`${styles.btn_qty}`}>-</button>
              <p className={`${styles.qty_nr}`}>1</p>
              <button className={`${styles.btn_qty}`}>+</button>
            </div>

            <ButtonMain
              className={`${bp.moreThan("md") ? styles.p_0 : styles.mt1_p0}`}
              text="Add To Cart"
              align="left"
              onClick={() => console.log("test")}
            />
          </div>
        </div>

        <div className={`${styles.dflex}`}>
          <p className={`${styles.mr_1} ${styles.mt_05}`}>Share:</p>
          <div className={`${styles.link}`}>
            <FaFacebookF />
          </div>
          <div className={`${styles.link}`}>
            <FiInstagram />
          </div>
          <div className={`${styles.link}`}>
            <AiOutlineTwitter />
          </div>
          <div className={`${styles.link}`}>
            <AiOutlineGoogle />
          </div>
          <div className={`${styles.link}`}>
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailView
