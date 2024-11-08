import styles from "../CssStyles/RowContainer.module.css";

export default function RowContainer(props) {
  return <div className={styles.RowContainer}> {props.children} </div>;
}
