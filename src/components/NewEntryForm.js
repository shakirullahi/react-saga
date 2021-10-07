import React from 'react';
import { Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from "./EntryForm"

import useEntryDetails from '../hooks/useEntryDetails';

const NewEntryForm = ({clearForm}) => {
  
  const {
    title, setTitle, value, setValue, isExpense, setIsExpense, addEntry
} = useEntryDetails();
    return (
      <Form unstackable>
        
        <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />

        <ButtonSaveOrCancel save='Save' cancel='Cancel' addEntry={addEntry} clearForm={clearForm}/>

      </Form>
    )
}

export default NewEntryForm;
