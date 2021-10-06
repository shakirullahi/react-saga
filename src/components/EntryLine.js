import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import { Grid, Icon, Segment } from 'semantic-ui-react'
import {useDispatch} from "react-redux";
import { removeEntryRedux } from '../actions/entries.actions';

const EntryLine = ({id,isExpense=false,title, value,editEntry}) => {

  const dispatch = useDispatch()

  

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
              <Icon name='edit' bordered onClick={()=>editEntry(id)} />
              <Icon name='trash' bordered onClick={()=>dispatch(removeEntryRedux(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Fragment>

    )
}

export default EntryLine
