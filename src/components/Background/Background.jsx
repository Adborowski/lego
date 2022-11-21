import styles from "./Background.module.css";

const Background = () => {
  //
  const bgElementSpan = "?";
  const bgElements = [];

  for (let i = 1; i <= 500; i++) {
    const styleObject = {
      position: "absolute",
      top: `${Math.random() * 10000}px`,
      left: `${Math.random() * 100}%`,
      color: "white",
      opacity: `${Math.random() * 0.1}`,
      fontSize: `${Math.random() * 200}px`,
      fontWeight: `800`,
      transform: `rotate(${Math.random() * 60 * (i % 2 ? -1 : 1)}deg)`,
    };
    bgElements.push({ span: bgElementSpan, style: styleObject });
  }

  // console.log(bgElements);

  return (
    <div className={styles.Background}>
      {bgElements.map((bgElem) => {
        return (
          <div
            className={styles.bgItem}
            key={Math.random() * 1000}
            style={bgElem.style}
          >
            {bgElem.span}
          </div>
        );
      })}
    </div>
  );
};

export default Background;
