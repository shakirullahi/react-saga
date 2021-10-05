import React, {useState} from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import EditEntryModal from './EditEntryModal'

const EntryLine = ({id,isExpense=false,title, value, deleteEntry}) => {

  const [isOpen, setIsOpen] = useState(false);

    return (
      <Fragment>
        <Segment color={isExpense? 'red': 'green'}  >
        <Grid columns='3' divided textAlign='right'>
          <Grid.Row>
            <Grid.Column width='10' textAlign='left'>
              {title}
            </Grid.Column>
            <Grid.Column width='3' textAlign='right'>
              {value}
            </Grid.Column>
            <Grid.Column width='3'>
              <Icon name='edit' bordered onClick={()=>setIsOpen(true)} />
              <Icon name='trash' bordered onClick={()=>deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <EditEntryModal isOpen={isOpen} />
    </Fragment>

    )
}

export default EntryLine
