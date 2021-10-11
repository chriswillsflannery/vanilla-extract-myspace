import { style } from "@vanilla-extract/css";

export const THREEEIGHTHS_STYLE = style({
  width: '100%',
  height: '50rem',
  display: 'grid',
  gridTemplateColumns: '3fr 5fr',
  gap: '1rem',
  marginBottom: '1rem',
});

export const CELL_STYLE = style({
  border: '1px solid white',
});