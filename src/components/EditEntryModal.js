import React, {useState} from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryLine from './EntryLine'
import EntryForm from './EntryForm'

const EditEntryModal = ({isOpen,setIsOpen, title:oldTitle, value:oldValue, isExpense:oldIsExpense}) => {
    const [title, setTitle] = useState(oldTitle);
    const [value, setValue] = useState(oldValue);
    const [isExpense, setIsExpense] = useState(oldIsExpense);
    
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <EntryForm title={title} value={value} isExpense={isExpense} setValue={setValue} setTitle={setTitle} setIsExpense={setIsExpense} />
            <Modal.Actions>
                <Button onClick={()=>setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditEntryModal
