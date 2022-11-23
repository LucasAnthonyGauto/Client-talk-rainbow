import { useNavigate } from 'react-router-dom'
import { Button } from '../../Atoms'
import styles from './styles.module.css'

const NavBar = () => {
  const naviage = useNavigate()

  return (
    <nav className={styles['nav']}>
      <div className={styles['divNav']}>
        <Button btnClick={() => naviage("/posts")} btnStyles='round'/>
        <Button btnClick={() => naviage("/")} btnStyles='round'/>
        <Button btnClick={() => naviage("/chat")} btnStyles='round'/>
      </div>
    </nav>
  )
}

export default NavBar