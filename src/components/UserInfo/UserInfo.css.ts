import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../sprinkles.css";
import { useHoverStyle } from "../../vars.css";

export const USERINFO_STYLE = style({
  display: 'flex',
  flexDirection: 'column',
});

const MSM_SPRINKLES = sprinkles({
  color: 'white',
  background: 'red-700',
  fontSize: "1x",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: "body",
});

export const MSM_STYLE = style([
  MSM_SPRINKLES,
  {
    height: '30px',
    width: '200px',
    marginBottom: '1rem',
    ...useHoverStyle,
  }
]);

export const AVATAR_STYLE = style({
  display: 'flex',
  marginTop: '1rem',
});

export const AVATAR_IMAGE = style({
  width: '130px',
  height: '130px',
  overflow: 'hidden',
  ...useHoverStyle,
});

export const AVATAR_INFO = style({
  display: 'flex',
  flexDirection: 'column',
});

export const CONTACT_STYLE = style({
  marginTop: '1rem',
});

export const CONTACT_GRID = style({
  marginTop: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export const CONTACT_GRID_ITEM = style({
  ...useHoverStyle,
});

export const URLSECTION_STYLE = style({
  marginTop: '1rem',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
});

export const URLSECTION_ITEM = style({
  color: 'black',
});