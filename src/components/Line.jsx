import styles from '../../styles/Board.module.css'
import Subdivision from './Subdivision'

export default function Line(props) {
  return (
   <div className={styles.line}>
     <Subdivision preta={props.preta}/>
     <Subdivision preta={!props.preta}/>
     <Subdivision preta={props.preta}/>
     <Subdivision preta={!props.preta}/>
     <Subdivision preta={props.preta}/>
     <Subdivision preta={!props.preta}/>
     <Subdivision preta={props.preta}/>
     <Subdivision preta={!props.preta}/>
   </div>
  )
}