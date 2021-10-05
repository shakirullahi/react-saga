import React, {useState} from 'react';
import { Form} from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from "./EntryForm"

const NewEntryForm = ({addEntry}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const clearForm = ()=> {
    setTitle('');
    setValue('');
    setIsExpense(true);
  }
  
    return (
      <Form unstackable>
        
        <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />

        <ButtonSaveOrCancel save='Save' cancel='Cancel' title={title} value={value} isExpense={isExpense} addEntry={addEntry} clearForm={clearForm}/>

      </Form>
    )
}

export default NewEntryForm
