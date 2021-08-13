import styles from '../../styles/Board.module.css'

export default function Subdivision(props) {
  return (
    <div className={styles.piece} style={{backgroundColor: props.preta ? '#000' : '#fff'}}></div>
  );
}