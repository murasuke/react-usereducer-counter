import { VFC } from 'react';

import CounterWidget from 'components/CounterWidget';

import './styles.css';

const App: VFC = () => (
  <div className="App">
    <header>
      <h1>ビーズカウンター</h1>
    </header>
    <CounterWidget />
  </div>
);

export default App;
