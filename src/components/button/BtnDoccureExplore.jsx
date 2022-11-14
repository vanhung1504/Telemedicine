import styles from "./BtnDocureExplore.module.scss";

function BtnDoccureExplore({ href = "#", title = "", ...rest }) {
  return (
    <a
      {...rest}
      href={href}
      className={`text-white text-decoration-none ${styles["doccure-explore"]}`}
    >
      {title}
    </a>
  );
}

export default BtnDoccureExplore;
