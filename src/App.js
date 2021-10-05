import { useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entriies, setEntriies] = useState(initialEntries);
  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <DisplayBalance label="Your Balance" value='10,000' size='small' color='black' textAlign='left'/>

      <DisplayBalances />

      <MainHeader title="TransactionHistory" type='h3'/>

      {
        entriies.map(entry=>(
          <EntryLine isExpense={entry.isExpense} title={entry.title} value={entry.value} />
        ))
      }
      

      <MainHeader title="Add new transaction" type='h3'/>

      <NewEntryForm/>

    </Container>
  );
}

export default App;


var initialEntries = [
  {
  title:"Salary",
  value:"100000.00",
  isExpense:false
},
{
  title:"KSEB",
  value:"100.00",
  isExpense:true
},
{
  title:"Grocery",
  value:"3000.00",
  isExpense:true
},
{
  title:"Bike Service",
  value:"200.00",
  isExpense:true
}
];