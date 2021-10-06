import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

const DisplayBalances = ({incomeTotal, expenseTotal}) => {
    return (
        <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance label="Income" value={incomeTotal} size='tiny' color='green' textAlign='center' />
            </Grid.Column>
            <Grid.Column>
            <DisplayBalance label="Expenses" value={expenseTotal} size='tiny' color='red' textAlign='left' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default DisplayBalances
