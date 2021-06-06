import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '../node_modules/@material-ui/core/ButtonGroup';
import Button from '../node_modules/@material-ui/core/Button';
import SaveIcon from '../node_modules/@material-ui/icons/Save';
import DeleteIcon from '../node_modules/@material-ui/icons/Delete';
import Checkbox from '../node_modules/@material-ui/core/Checkbox';
import FormControlLabel from '../node_modules/@material-ui/core/FormControlLabel';
import TextField from '../node_modules/@material-ui/core/TextField';

import {makeStyles, ThemeProvider, createMuiTheme} from '../node_modules/@material-ui/core/styles';
import {orange} from '../node_modules/@material-ui/core/colors';
import {purple} from '../node_modules/@material-ui/core/colors';

const useStyles = makeStyles({
  root:{
    border:0,
    bacground:'linear-gradient(45deg,#fe6b8b,#ff8e53)',
    borderRadius:15,
    marginBottom:15,
    color:'white',
    padding:'5px 30px'
  }
})

const theme = createMuiTheme({
  palette:{
    primary:{
      main:orange[500],
    },
    secondary:{
      main:purple[500],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample(){
  const [checked,setChecked] = React.useState(true)
  return (
    <div>
      <FormControlLabel
      control={<Checkbox 
        checked={checked}
        icon={<SaveIcon/>}
        checkedIcon={<DeleteIcon/>}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{'aria-label':'secondary checkbox'}}
        />}
        label="Testing Checkbox"
        />
    </div>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonStyled/>
        <TextField
          variant="outlined"
          color="secondary"
          //type="time"
          type="email"
          label="Enter your email"
          placeholder="email@email.com"
          />
        <CheckboxExample />
        <ButtonGroup>
          <Button 
            startIcon={<SaveIcon />}
            size="large"
            variant="contained" color="primary">Save</Button>
            <Button 
          startIcon={<SaveIcon />}
          size="large"
          variant="contained" color="secondary">Discard</Button>
        </ButtonGroup>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
