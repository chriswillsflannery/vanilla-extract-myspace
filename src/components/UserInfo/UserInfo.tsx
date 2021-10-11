import { AVATAR_IMAGE, AVATAR_INFO, AVATAR_STYLE, CONTACT_GRID, CONTACT_GRID_ITEM, CONTACT_STYLE, MSM_STYLE, URLSECTION_ITEM, URLSECTION_STYLE, USERINFO_STYLE } from "./UserInfo.css";
import chris from '../../assets/chris.jpg';

export const UserInfo = () => (
  <section className={USERINFO_STYLE}>
    <div className={MSM_STYLE}>
      <h4>MYSPACE MUSIC</h4>
    </div>
    <h5>CHRIS FLANNERY</h5>
    <h5>ROCK/POST-HARDCORE</h5>
    <div className={AVATAR_STYLE}>
      <img className={AVATAR_IMAGE} src={chris} alt="chris" />
      <div className={AVATAR_INFO}>
        <h6>"CHRIS FLANNERY"</h6>
        <h6>Jersey City, New Jersey</h6>
        <h6>Profile Views: 102921</h6>
        <h6>Online Now!</h6>
        <h6>Last Login: 9/9/2004</h6>
      </div>
    </div>
    <h6>View more pics</h6>
    <div className={CONTACT_STYLE}>
      <h5>Contacting CHRIS FLANNERY</h5>
      <div className={CONTACT_GRID}>
        <h6 className={CONTACT_GRID_ITEM}>Send message</h6>
        <h6 className={CONTACT_GRID_ITEM}>Forward to friend</h6>
        <h6 className={CONTACT_GRID_ITEM}>Add to friends</h6>
        <h6 className={CONTACT_GRID_ITEM}>Add to favorites</h6>
        <h6 className={CONTACT_GRID_ITEM}>Instant message</h6>
        <h6 className={CONTACT_GRID_ITEM}>Block user</h6>
        <h6 className={CONTACT_GRID_ITEM}>Add to group</h6>
        <h6 className={CONTACT_GRID_ITEM}>Rank user</h6>
      </div>
    </div>
    <div className={URLSECTION_STYLE}>
      <h6 className={URLSECTION_ITEM}>MySpace URL:</h6>
      <h6 className={URLSECTION_ITEM}>http://www.myspace.com/chriswflannery</h6>
    </div>
  </section>
);