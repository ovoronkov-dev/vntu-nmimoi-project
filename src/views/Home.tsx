import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const HomeView = () => {
  return (
    <Box>
      <Typography variant="h5" align="center" color="white">
        Вибір кавової машини
      </Typography>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button
          component={Link}
          to="/playground"
          variant="contained"
          size="large"
        >
          Розпочати
        </Button>
      </Box>
    </Box>
  );
};
