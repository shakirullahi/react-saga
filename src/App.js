import { Button, Container, Form, Grid, GridRow, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <DisplayBalance label="Your Balance" value='10,000' size='small' color='black' textAlign='left'/>

      <DisplayBalances />

      <MainHeader title="TransactionHistory" type='h3'/>
      
      <EntryLine color='red' title='Online Purchase' value='25,0.00' />
      <EntryLine color='green' title='Mentoring' value='10,000' />
      <EntryLine color='red' title='Grocery' value='15,0.00' />
      
      
      <MainHeader title="Add new transaction" type='h3'/>

      <NewEntryForm/>

    </Container>
  );
}

export default App;
