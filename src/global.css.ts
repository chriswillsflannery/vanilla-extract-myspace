import { globalStyle } from '@vanilla-extract/css';

globalStyle('body, body *', {
  all: 'unset',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  color: 'white',
  fontFamily: 'sans-serif',
});

globalStyle('h3', {
  fontSize: '1.5rem',
});

globalStyle('h4', {
  fontSize: '1.3rem',
});

globalStyle('h5', {
  fontSize: '1rem',
});

globalStyle('h6', {
  fontSize: '0.7rem',
});