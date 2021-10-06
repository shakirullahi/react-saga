import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryModal from './components/EditEntryModal';
import Entries from './components/Entries';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  const clearForm = ()=> {
    setTitle('');
    setValue('');
    setIsExpense(true);
  }

  useEffect(() => {
    if(!isOpen && entryId){
      const index = entries.findIndex(entry => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].title = title;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      clearForm();
    }
  }, [isOpen])

  //edit Entry
  const editEntry = id => {
    if(id){
      const index = entries.findIndex(entry=>entry.id===id);
      setTitle(entries[index].title);
      setValue(entries[index].value);
      setIsExpense(entries[index].isExpense);
      setIsOpen(true); 
      setEntryId(id); 
      // clearForm();
    }
  }

  // Delete entry
  const deleteEntry = id => {
    const result = entries.filter(entry=> entry.id!==id);
    setEntries(result);
  }

  const addEntry = () => {
    const result = entries.concat({id:entries.length+1, title,value,isExpense});

    setEntries(result);
    clearForm();

  }

  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <DisplayBalance label="Your Balance" value='10,000' size='small' color='black' textAlign='left'/>

      <DisplayBalances />

      <MainHeader title="TransactionHistory" type='h3'/>

      <Entries entries={entries}  deleteEntry={deleteEntry} editEntry={editEntry} />
  
      <MainHeader title="Add new transaction" type='h3'/>

      <NewEntryForm addEntry={addEntry} title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} clearForm={clearForm}/>


      <EditEntryModal 
      isOpen={isOpen} 
      setIsOpen={setIsOpen}
      title={title} 
      value={value} 
      isExpense={isExpense} 
      setValue={setValue} 
      setTitle={setTitle} 
      setIsExpense={setIsExpense}  
      />

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