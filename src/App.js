import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import Entries from './components/Entries';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries);

  // Delete entry
  const deleteEntry = id => {
    const result = entries.filter(entry=> entry.id!==id);
    setEntries(result);
  }

  const addEntry = (title, value) => {
    const result = entries.concat({id:entries.length+1, title,value});

    setEntries(result);

  }

  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <DisplayBalance label="Your Balance" value='10,000' size='small' color='black' textAlign='left'/>

      <DisplayBalances />

      <MainHeader title="TransactionHistory" type='h3'/>

      <Entries entries={entries}  deleteEntry={deleteEntry} />
  
      <MainHeader title="Add new transaction" type='h3'/>

      <NewEntryForm addEntry={addEntry}/>

    </Container>
  );
}

export default App;


var initialEntries = [
  {
  id:1,
  title:"Salary",
  value:"100000.00",
  isExpense:false
},
{
  id:2,
  title:"KSEB",
  value:"100.00",
  isExpense:true
},
{
  id:3,
  title:"Grocery",
  value:"3000.00",
  isExpense:true
},
{
  id:4,
  title:"Bike Service",
  value:"200.00",
  isExpense:true
}
];