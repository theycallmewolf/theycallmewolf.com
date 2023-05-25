import { Slider } from "components/elements/Slider";
import { SliderProps } from "types";

import styles from "./project-slider.module.scss";

interface ProjectSliderProps {
  slides?: SliderProps["slides"];
}

export const ProjectSlider: React.FC<ProjectSliderProps> = (props) => {
  if (!props.slides) return null;

  return (
    <Slider
      slides={props.slides}
      contentType="image"
      className={styles.slider}
    />
  );
};
