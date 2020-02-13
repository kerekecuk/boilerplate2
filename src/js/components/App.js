import React from 'react';
import { MyForm } from './Form';
import { Clock } from './Clock';
import { hot } from 'react-hot-loader/root';

class NotHotApp extends React.Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    );
  }
}

const App = hot(NotHotApp);
export { App };
