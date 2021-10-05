import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EntryLine from './EntryLine'
import NewEntryForm from './NewEntryForm'

const EditEntryModal = ({isOpen,setIsOpen}) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <NewEntryForm/>
            <Modal.Actions>
                <Button onClick={()=>setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditEntryModal
