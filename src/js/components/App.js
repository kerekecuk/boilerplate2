import React from 'react';
import { MyForm } from './Form';
import { hot } from 'react-hot-loader/root';

class NotHotApp extends React.Component {
  render() {
    return (
      <div>
        <MyForm />
      </div>
    );
  }
}

const App = hot(NotHotApp);
export { App };
