import { style } from '@vanilla-extract/css';
import { useHoverStyle } from '../../vars.css';

export const ADBANNER_STYLE = style({
  width: '100%',
  height: '10rem',
  marginBottom: '1rem',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...useHoverStyle,
});