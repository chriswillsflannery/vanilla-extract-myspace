import { style } from '@vanilla-extract/css';

export const ADBANNER_STYLE = style({
  width: '100%',
  height: '10rem',
  border: '1px solid white',
  marginBottom: '1rem',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'crosshair',
  ':hover': {
    filter: 'invert(1)',
  }
});