import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryForm from './EntryForm'

const EditEntryModal = ({isOpen,setIsOpen,  value, title, isExpense, setIsExpense, setTitle, setValue}) => {
    
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />
            <Modal.Actions>
                <Button onClick={()=>{setIsOpen(false)}}>Close</Button>
                <Button primary onClick={()=>{setIsOpen(false)}}>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditEntryModal
