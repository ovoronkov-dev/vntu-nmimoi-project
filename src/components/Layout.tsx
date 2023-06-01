import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => (
  <div>
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
        >
          Кавові машини
        </Typography>

        <Button color="inherit" component={Link} to="/list">
          Доступні дані
        </Button>
      </Toolbar>
    </AppBar>

    <Toolbar />

    <Container sx={{ display: 'flex' }} maxWidth="lg" className="container">
      <Outlet />

      <div className="overlay" />
    </Container>
  </div>
);
