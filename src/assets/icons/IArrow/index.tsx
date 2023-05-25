import styles from "./styles.module.scss";

interface IArrowProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  color?: "white" | "red" | "black";
}

const IArrow: React.FC<IArrowProps> = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      className={`${styles.element} ${color === "white" ? styles.white : ""} ${
        color === "red" && styles.red
      } ${color === "black" && styles.black}`}
    >
      <path d="M15 13l-9 9M6 0l11 11" strokeMiterlimit={10} />
    </svg>
  );
};

export default IArrow;
