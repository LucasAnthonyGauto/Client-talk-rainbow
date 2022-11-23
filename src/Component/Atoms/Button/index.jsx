import Styles from './Styles.module.css'

const Button = ({ btnStyles='round', btnClick, text }) => {
  return(
    <>
      <button className={Styles[btnStyles]} onClick={btnClick}>{text}</button>
    </>
  )
}

export default Button;