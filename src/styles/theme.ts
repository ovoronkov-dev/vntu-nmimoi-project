import { createTheme } from '@mui/material';
import { brown } from '@mui/material/colors';

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: brown['400'],
    },
  },
});
