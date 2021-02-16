import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import classes from './select.module.css';
import {ReactComponent as DownArrow} from '../../assets/images/select/Arrow.svg';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({

  account:
  {
   width:'100%',
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
     color: '#E7C68E',
    '&hover:':{
      
    }
  },
  icon:{
    fontSize:'1.5rem',
    
  }
  ,
  menu:{
    marginTop:'50px' , 
     background: 'rgba(0,0,0,0.5)',
     fontWeight:"600",
  }, 
   list:{
    background: 'linear-gradient(60deg,#E7C68E 0%, #9D7A54 100%)',
    fontWeight: 700,
 '&:hover:': {
    color:'black',
    borderLeft:'1px solid black',
  }}


}));

const Select = () => {
  const Classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu"
      endIcon={<ExpandMoreIcon className={Classes.icon} />}
      className={Classes.account}
       aria-haspopup="true" onClick={handleClick}>
      All Category
      </Button>
      <Menu className={Classes.menu} 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem  className={Classes.list} onClick={handleClose}>Free Shopping</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Electronics</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Jewellery & watches</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Collectibles</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Home & Garden</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Sport & Outdoor</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Toy,Baby & Kids</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Fashion & Accessories</MenuItem>
        <MenuItem  className={Classes.list} onClick={handleClose}>Beauty & Health</MenuItem>
      </Menu>
    </div>
  );
}
export {Select}