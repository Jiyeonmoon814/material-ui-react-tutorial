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
import {orange,purple} from '../node_modules/@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '../node_modules/@material-ui/core/Typography';
import Container from '../node_modules/@material-ui/core/Container';

import Paper from '../node_modules/@material-ui/core/Paper';
import Grid from '../node_modules/@material-ui/core/Grid';

import AppBar from '../node_modules/@material-ui/core/AppBar';
import Toolbar from '../node_modules/@material-ui/core/Toolbar';
import IconButton from '../node_modules/@material-ui/core/IconButton';
import Menu from '../node_modules/@material-ui/icons/Menu';

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
  typography: {
    h2:{
      fontsize:36,
    }
  },
  palette:{
    primary:{
      main:orange[500],
    },
    secondary:{
      main:purple[300],
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
    <Container maxWidth="xs">
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <Toolbar>
            <IconButton>
              <Menu />
            </IconButton>
            <Typography variant="h6">MUI Themeing</Typography>
            <Button>Login</Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h2">Welcome to MUI</Typography>
        <Typography variant="subtitle1">Learn how to use Material UI</Typography>
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonStyled/>

       <Grid container spacing={2} justify="center">
        <Grid item xs={3} sm={6}>
            <Paper style={{height:75,width:'100%',}} />
        </Grid>
        <Grid item xs={3} sm={6}>
            <Paper style={{height:75,width:'100%',}} />
        </Grid>
        <Grid item xs={3} sm={6}>
            <Paper style={{height:75,width:'100%',}} />
        </Grid>
       </Grid>

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
    </Container>
    </ThemeProvider>
  );
}

export default App;
