import React from 'react'
import { Button } from 'semantic-ui-react'


const ButtonSaveOrCancel = ({save='OK', cancel='Cancel', title, value, addEntry,clearForm}) => {
    return (
        <Button.Group style={{marginTop:'20px'}}>
          <Button onClick={()=>clearForm()}>{cancel}</Button>
          <Button.Or />
          <Button primary onClick={()=>{clearForm();addEntry(title,value)}}>{save}</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
