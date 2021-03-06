import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EditEntryModal from './components/EditEntryModal';
import Entries from './components/Entries';

import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';


import {useSelector} from "react-redux";

function App() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [balanceTotal, setBalanceTotal] = useState(0)

  const entries = useSelector(state => state.entries)

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
      // setEntries(newEntries);
      clearForm();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    
    let totalExpenses = 0;
    let totalIncomes = 0;

    entries.map(entry => {
      if(entry.isExpense){
        return (totalExpenses += Number(entry.value));
      }
      else{
        return (totalIncomes += Number(entry.value));
      }
    });

    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    setBalanceTotal(totalIncomes-totalExpenses);

  }, [entries])

  //edit Entry
  const editEntry = id => {
    if(id){
      const index = entries.findIndex(entry=>entry.id===id);
      setTitle(entries[index].title);
      setValue(parseFloat(entries[index].value));
      setIsExpense(entries[index].isExpense);
      setIsOpen(true); 
      setEntryId(id); 
      // clearForm();
    }
  }


  // const addEntry = () => {
  //   const result = entries.concat({id:entries.length+1, title,value:parseFloat(value),isExpense});

  //   // setEntries(result);
  //   clearForm();

  // }

  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <DisplayBalance label="Your Balance" value={balanceTotal} size='small' color='black' textAlign='left'/>

      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="TransactionHistory" type='h3'/>

      <Entries entries={entries}  editEntry={editEntry} />
  
      <MainHeader title="Add new transaction" type='h3'/>

      <NewEntryForm  clearForm={clearForm}/>


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

