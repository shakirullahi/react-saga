import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const EditEntryModal = ({isOpen,setIsOpen}) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Description>Something</Modal.Description>
            <Modal.Actions>
                <Button onClick={()=>setIsOpen(false)}>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default EditEntryModal
