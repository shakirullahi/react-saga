import React, {useState} from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({addEntry}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const clearForm = ()=> {
    setTitle('');
    setValue('');
    setIsExpense(false);
  }
  
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width='12' label='Description' placeholder="New shiny thing" value={title} onChange={(e)=>setTitle(e.target.value)} />

          <Form.Input width='4' label='Value' placeholder='100.00' icon='dollar' iconPosition='left' value={value}  onChange={(e)=>setValue(e.target.value)} />
        </Form.Group>

        <Segment compact>
          <Checkbox 
          label="Is Expense"
          toggle
          checked={isExpense}
          onChange={()=>setIsExpense(oldState=>!oldState)}
          />
          </Segment>
        
        <ButtonSaveOrCancel save='Save' cancel='Cancel' title={title} value={value} isExpense={isExpense} addEntry={addEntry} clearForm={clearForm}/>
        
        

      </Form>
    )
}

export default NewEntryForm
