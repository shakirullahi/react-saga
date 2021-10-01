import React from 'react'
import { Button } from 'semantic-ui-react'


const ButtonSaveOrCancel = ({save='OK', cancel='Cancel'}) => {
    return (
        <Button.Group style={{marginTop:'20px'}}>
          <Button>{cancel}</Button>
          <Button.Or />
          <Button primary>{save}</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel
