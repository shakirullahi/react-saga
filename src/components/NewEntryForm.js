import React, {useState} from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({addEntry}) => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const clearForm = ()=> {
    setTitle('');
    setValue('');
  }
  
    return (
        <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width='12' label='Description' placeholder="New shiny thing" value={title} onChange={(e)=>setTitle(e.target.value)} />

          <Form.Input width='4' label='Value' placeholder='100.00' icon='dollar' iconPosition='left' value={value}  onChange={(e)=>setValue(e.target.value)} />
        </Form.Group>

        <ButtonSaveOrCancel save='Save' cancel='Cancel' title={title} value={value} addEntry={addEntry} clearForm={clearForm}/>
        
      </Form>
    )
}

export default NewEntryForm
