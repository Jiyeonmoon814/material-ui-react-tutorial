import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '../node_modules/@material-ui/core/ButtonGroup';
import Button from '../node_modules/@material-ui/core/Button';
import SaveIcon from '../node_modules/@material-ui/icons/Save';
import DeleteIcon from '../node_modules/@material-ui/icons/Delete';
import Checkbox from '../node_modules/@material-ui/core/Checkbox';
import FormControlLabel from '../node_modules/@material-ui/core/FormControlLabel';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
  );
}

export default App;
