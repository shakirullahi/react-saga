import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

const EntryLine = ({id,isExpense=false,title, value, deleteEntry}) => {
    return (
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
              <Icon name='edit' bordered />
              <Icon name='trash' bordered onClick={()=>deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

    )
}

export default EntryLine
