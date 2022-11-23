import Styles from './Styles.module.css'

const Img = ({ imgSize, styleImg, link, altText }) => {
  return(
    <>
      <img className={[Styles[imgSize], Styles[styleImg]].join(" ")} src={link} alt={altText} />
    </>
  )
}

export default Img;