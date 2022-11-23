import { Text, Title } from '../../Atoms'
import styles from './styles.module.css'

const PostCard = ({id, name, date, comment, color}) => {
  // console.log(name);
  return (
    <div>
      <Title text={name} type='h3'/>
      <div className={[styles["boxText"],styles[color]].join(" ")}>
        <Text text={comment}/>
      </div>
      <Title text={date} type='h5'/>
    </div>
  )
}

export default PostCard