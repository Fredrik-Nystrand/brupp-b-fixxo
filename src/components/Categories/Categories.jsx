import React from 'react'
import styles from './Categories.module.css'
import useBreakpoint from '../../shared/hooks/useBreakpoint'
import ButtonMain from '../ButtonMain/ButtonMain'

// img
import woman from '../../assets/Categories/woman.jpeg'
import cosmatic from '../../assets/Categories/cosmatic.jpeg'
import flase from '../../assets/Categories/flase-sale.webp'
import man from '../../assets/Categories/man.jpeg'
import electric from '../../assets/Categories/electric.jpeg'

const Categories = () => {
    const bp = useBreakpoint();



  return (

        <div className={`${styles.grid} p1`} 
        style={{
          gridTemplateColumns: bp.lessThan("md")
            ? `repeat(1, minmax(0, 1fr))`
            : bp.moreThan("md")
            ? `repeat(3, minmax(0, 1fr))`
            : `repeat(2, minmax(0, 1fr))`,
            }}
            >

            <div className={`${styles.container}`}    
                style={{
                gridColumn: bp.moreThan("md")
                ? `1 / span 1`
                : `1 / span 1`,
                gridRow: bp.moreThan("md")
                ? `1 / span 3`
                : `1 / 1`,
                height: bp.moreThan("md")
                ? '916px'
                : '',
                width: bp.moreThan("md")
                ? '100%'
                : ''
            }}>
                <div className={`${styles.overlay}`}></div>
                    <img className={`${styles.card}`} src={woman} alt="A woman in a black blouse and black leather skirt"></img>
                <div className={`${styles.center}`}>
                    <ButtonMain 
                    variant='light'
                    text="Woman"
                    align = "center"
                    onClick={() => console.log("test")}/>
                </div>
            </div>

            <div className={`${styles.container}`} 
                style={{
                gridColumn: bp.moreThan("md")
                ? `2 / span 2`
                : ``,
                gridRow: bp.moreThan("md")
                ? `1`
                : ``,
                width: bp.moreThan("md")
                ? `49.5%`
                : ``,
                height: bp.moreThan("md")
                ? '450px'
                : ''
                }} >
                <div className={`${styles.overlay}`}></div>
                <img className={`${styles.card} ${styles.man}`} src={man} alt="A man in a blue pullover"/>
                <div className={`${styles.center}`}>
                    <ButtonMain 
                    variant='light'
                    text="Man"
                    align = "center"
                    onClick={() => console.log("test")}/>
                </div>
            </div>

            <div className={`${styles.container}`}    
                style={{
                gridColumn: bp.moreThan("md")
                ? `3 / span 3`
                : ``,
                gridRow: bp.moreThan("md")
                ? `1`
                : ``,
                width: bp.moreThan("md")
                ? '100%'
                : '',
                height: bp.moreThan("md")
                ? '450px'
                : ''
                }}>
                <div className={`${styles.overlay}`}></div>
                <img className={`${styles.card} ${styles.electric}`} src={electric} alt="A woman in silver earrings and a silver dress" />
                <div className={`${styles.center}`}>
                    <ButtonMain 
                    variant='light'
                    text="Electric"
                    align = "center"
                    onClick={() => console.log("test")}/>
                </div>
            </div>

            <div className={`${styles.container}`} style={{
                gridColumn: bp.moreThan("md")
                ? `2 / span 2`
                : ``,
                gridRow: bp.moreThan("md")
                ? `2`
                : ``,
                width: bp.moreThan("md")
                ? `49.5%`
                : ``,
                  height: bp.moreThan("md")
                ? '450px'
                : ''
                }}>
                <div className={`${styles.overlay}`}></div>
                <img className={`${styles.card} ${styles.flase}`} src={flase} alt="A woman in a white suit vest" />
                <div className={`${styles.center}`}>
                    <ButtonMain 
                    variant='light'
                    text="Flase Sale"
                    align = "center"
                    onClick={() => console.log("test")}/>
                </div>
            </div>

            <div className={`${styles.container}`} style={{
                gridColumn: bp.moreThan("md")
                ? `3 / span 3`
                : ``,
                gridRow: bp.moreThan("md")
                ? `2`
                : ``,
                width: bp.moreThan("md")
                ? `100%`
                : ``,
                  height: bp.moreThan("md")
                ? '450px'
                : ''
            }}>
                <div className={`${styles.overlay}`}></div>
                <img className={`${styles.card} ${styles.cosmatic}`} src={cosmatic} alt="Makeup brushes" />
                <div className={`${styles.center}`}>
                    <ButtonMain 
                    variant='light'
                    text="Cosmatic"
                    align = "center"
                    onClick={() => console.log("test")}/>
                </div>
            </div>

        </div>
  )
}

export default Categories