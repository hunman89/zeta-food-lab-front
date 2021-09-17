import { Container } from '@mui/material';
import longLogo from '../images/long-logo.png'

export default function Header() {
  return (
    <Container sx={{height: 100,}}>
        <img src={longLogo} height="50" alt="long-zeta-food-lab-logo"/>
    </Container>
  );
}