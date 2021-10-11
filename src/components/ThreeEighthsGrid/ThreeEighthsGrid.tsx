import { UserInfo } from "../UserInfo/UserInfo";
import { THREEEIGHTHS_STYLE, CELL_STYLE } from "./ThreeEighthsGrid.css";

export const ThreeEightsGrid = () => (
  <section className={THREEEIGHTHS_STYLE}>
    <div className={CELL_STYLE}>
      <UserInfo />
    </div>
    <div className={CELL_STYLE}>

    </div>
  </section>
);