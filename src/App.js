import { Button, Container, Form, Grid, GridRow, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

import MainHeader from './components/MainHeader';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';

function App() {
  return (
    <Container>

      <MainHeader title="Welcome to Budget App"/>

      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>10,000.00</Statistic.Value>
      </Statistic>

      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign:'left'}}>
                  Income
                </Statistic.Label>
                <Statistic.Value>
                  89,000.00
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign:'left'}}>
                  Expenses
                </Statistic.Label>
                <Statistic.Value>
                  15,000.00
                </Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="TransactionHistory" type='h3'/>
      

      <Segment color='red' >
        <Grid columns='3' divided textAlign='right'>
          <Grid.Row>
            <Grid.Column width='10' textAlign='left'>
              Online Purchase
            </Grid.Column>
            <Grid.Column width='3' textAlign='right'>
              $120.00
            </Grid.Column>
            <Grid.Column width='3'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='green' >
        <Grid columns='3' divided textAlign='right'>
          <Grid.Row>
            <Grid.Column width='10' textAlign='left'>
              Mentoring
            </Grid.Column>
            <Grid.Column width='3' textAlign='right'>
              1000.00
            </Grid.Column>
            <Grid.Column width='3'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red' >
        <Grid columns='3' divided textAlign='right'>
          <Grid.Row>
            <Grid.Column width='10' textAlign='left'>
              Grocery
            </Grid.Column>
            <Grid.Column width='3' textAlign='right'>
              1000.00
            </Grid.Column>
            <Grid.Column width='3'>
              <Icon name='edit' bordered />
              <Icon name='trash' bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new transaction" type='h3'/>

      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width='12' label='Description' placeholder="New shiny thing" />
          <Form.Input width='4' label='Value' placeholder='100.00' icon='dollar' iconPosition='left'/>
        </Form.Group>

        <ButtonSaveOrCancel save='Save' cancel='Cancel'/>
        
      </Form>

    </Container>
  );
}

export default App;
