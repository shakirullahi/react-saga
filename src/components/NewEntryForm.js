import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({addEntry}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);
  const clearForm = ()=> {
    setTitle('');
    setValue('');
    setIsExpense(false);
  }
  
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width='10' label='Description' placeholder="New shiny thing" value={title} onChange={(e)=>setTitle(e.target.value)} />

          <Form.Input width='4' label='Value' placeholder='100.00' icon='dollar' iconPosition='left' value={value}  onChange={(e)=>setValue(e.target.value)} />

            <Form.Checkbox width='2' label='Is Expense' checked={isExpense}  onChange={(e)=>setIsExpense(e.target.checked)} />
        </Form.Group>

        <ButtonSaveOrCancel save='Save' cancel='Cancel' title={title} value={value} isExpense={isExpense} addEntry={addEntry} clearForm={clearForm}/>
        
      </Form>
    )
}

export default NewEntryForm
