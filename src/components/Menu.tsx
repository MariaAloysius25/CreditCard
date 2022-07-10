import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

//Hamburger menu
export default function NavMenu() {
  const navigate = useNavigate();
  return (
      <Menu menuButton={<MenuIcon />} transition>
          <MenuItem onClick={() => {navigate('/profile')}}>Profile</MenuItem>
          <MenuItem onClick={() => {navigate('/')}}>Register</MenuItem>
      </Menu>
  );
}