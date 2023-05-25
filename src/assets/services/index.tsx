import styles from "./styles.module.scss";

interface ServicesSVGProps {
  icon: "design" | "dev" | "illustration" | "ui";
}

export const ServicesSVG: React.FC<ServicesSVGProps> = ({ icon }) => (
  <div className={styles.container}>
    <div className={styles.svgContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 575 200"
        preserveAspectRatio="xMidYMid"
      >
        <g className={icon !== "design" ? styles.hide : undefined}>
          <path
            d="M285 95H0m293 52V52m-4 115v8h50l75-72 3-3-78-75h-50v8m117 67l-70 67"
            className={styles.fg}
          />
          <path
            d="M281 95H-4m293 52V52m-4 115v8h50l75-72 3-3-78-75h-50v8m117 67l-70 67"
            className={styles.bg}
          />
        </g>

        <g className={icon !== "dev" ? styles.hide : undefined}>
          <path
            d="M0 162.1h204.4l48.6-48.6 49.8 49.8 23.3-23.3-5.6-5.7-17.7 17.7-44.2-44.1"
            className={styles.fg}
          />
          <path
            d="M167.3 58.5h-8v70.7m88-21.3L198 58.5 226.5 30l5.6 5.6-22.8 22.9 43.7 43.7 58.9-58.9 55.3 55.4L465.9-.1M319.6 35.6l55.3 55.3"
            className={styles.fg}
          />
          <path
            d="M163.3 58.5h-8v95.6M367.2 87.3l-49.9-49.8-5.6 5.7.2.2-58.9 58.8-43.7-43.7L232 35.6l-5.6-5.6L198 58.5l49.4 49.4L201 154h-37.8"
            className={styles.bg}
          />
          <path
            d="M317.5 49l49.7 49.6L465.9 0M0 162.1h204.4l48.6-48.6 49.8 49.8 23.3-23.3-5.6-5.7-17.7 17.7-44.1-44.1"
            className={styles.bg}
          />
        </g>

        <g className={icon !== "illustration" ? styles.hide : undefined}>
          <path
            d="M0 154.9h244.5V200M244.5 146.9H0M575 190.3H252.5v-86.8h-8"
            className={styles.fg}
          />
          <path
            d="M249.4 103.5h-8v43.4H0v8h241.4v43.4H575v-8H249.4z"
            className={styles.bg}
          />
        </g>

        <g className={icon !== "ui" ? styles.hide : undefined}>
          <path
            d="M344 200v-92L411 0m-74 105l-1 1v94M196 0l-11 18v103L55 50v9l228 128M318 0l-43 69v104l-82-48v-25"
            className={styles.fg}
          />
          <path
            d="M342 200v-92L409 0m-75 105v95M194 0l-11 18v103L0 21v10l280 156M315 0l-42 69-1 1v103l-81-48v-25"
            className={styles.bg}
          />
        </g>
      </svg>
    </div>
  </div>
);
