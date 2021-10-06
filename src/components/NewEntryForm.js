import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from "./EntryForm"
import {addEntryRedux} from "../actions/entries.actions"

const NewEntryForm = ({clearForm}) => {
  
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  
  const addEntry = () => {
    dispatch(addEntryRedux({
      id:5,
      title,
      value,
      isExpense
    }));
    setTitle('');
    setValue('');
    setIsExpense(true);
  }

    return (
      <Form unstackable>
        
        <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />

        <ButtonSaveOrCancel save='Save' cancel='Cancel' addEntry={addEntry} clearForm={clearForm}/>

      </Form>
    )
}

export default NewEntryForm;
