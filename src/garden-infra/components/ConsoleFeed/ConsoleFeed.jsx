import {Console, Decode, Hook} from 'console-feed';
import React from 'react';

import './ConsoleFeed.scss';

export class ConsoleFeed extends React.Component {
  state = {
    logs: [],
  };

  componentDidMount() {
    Hook(window.console, (log) => {
      if (this.props?.orderByDate) {
        this.setState(({logs}) => ({logs: [Decode(log), ...logs]}));
      } else {
        this.setState(({logs}) => ({logs: [...logs, Decode(log)]}));
      }
    });
  }

  render() {
    return (
      <div style={{backgroundColor: '#242424'}}>
        <div className="sticky-console-feed">
          <button onClick={() => this.setState({logs: []})}>Clear</button>
        </div>
        <Console logs={this.state.logs} variant="dark" />
      </div>
    );
  }
}
