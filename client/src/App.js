import React, {Component} from 'react';
import {DrizzleContext} from 'drizzle-react';
import DappToken from './Components/DappToken';

class App extends Component {
  render() {
    return (
      <DrizzleContext.Consumer>
        {drizzleContext => {

          const {drizzle, drizzleState, initialized} = drizzleContext;
          if (!initialized) {
            return (<div>Loading.....</div>);
          }
          return (
            <DappToken drizzle={drizzle}
                       drizzleState={drizzleState} />
          );
        }}

      </DrizzleContext.Consumer>
    );
  }
}

export default App;
