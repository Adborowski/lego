import { useNavigate } from "react-router-dom";
import styles from "./Welcome.module.css";

const Welcome = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/mysterybox");
  };
  return (
    <div className={styles.Welcome}>
      <div className={styles.controls}>
        <h1>Lego Minifigs Mystery&nbsp;Box</h1>
        <button onClick={handleStart}>Let's Go!</button>
      </div>
    </div>
  );
};

export default Welcome;
