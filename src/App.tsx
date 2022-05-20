import { VFC } from 'react';
import styled from 'styled-components';

import CounterWidget from 'components/CounterWidget';

const CenterdDiv = styled.div`
  text-align: center;
`;

const App: VFC = () => (
  <CenterdDiv className="App">
    <header>
      <h1>ビーズカウンター　useReducer</h1>
    </header>
    <CounterWidget />
    <CounterWidget initialCount={3} />
  </CenterdDiv>
);

export default App;
