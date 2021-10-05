import React, {useState} from 'react';
import { Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from "./EntryForm"

const NewEntryForm = ({addEntry, title, value, isExpense,setTitle, setValue,setIsExpense, clearForm}) => {
  
  
    return (
      <Form unstackable>
        
        <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />

        <ButtonSaveOrCancel save='Save' cancel='Cancel' title={title} value={value} isExpense={isExpense} addEntry={addEntry} clearForm={clearForm}/>

      </Form>
    )
}

export default NewEntryForm
