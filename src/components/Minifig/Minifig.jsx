import styles from "./Minifig.module.css";

const Minifig = ({ onFigSelection, figData, isActive }) => {
  return (
    <div
      onClick={() => {
        onFigSelection(figData);
        // console.log(figData.set_url);
      }}
      className={`${styles.Minifig} ${isActive ? styles.active : ""}`}
      key={figData.name}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${figData.set_img_url})` }}
      ></div>
      <a target="_blank" href={figData.set_url}>
        <span>Show details</span>
      </a>
      <div className={styles.name}>{figData.name}</div>
    </div>
  );
};

export default Minifig;
