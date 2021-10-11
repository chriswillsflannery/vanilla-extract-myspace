import adbanner from '../../assets/prize.jpg';
import { ADBANNER_STYLE } from "./AdBanner.css";

export const AdBanner = () => (
  <section className={ADBANNER_STYLE}>
    <img className="animate-jiggle" src={adbanner} alt="adbanner" />
  </section>
)