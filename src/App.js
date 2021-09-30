import { Container, Header, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget </Header>
      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>10,000.00</Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
