import React from 'react'
import { Fragment } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'

const EntryForm = ({value, title, isExpense, setIsExpense, setTitle, setValue}) => {
    return (
        <Fragment>
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
        
        </Fragment>
    )
}

export default EntryForm
