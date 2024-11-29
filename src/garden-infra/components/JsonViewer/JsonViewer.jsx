import React, {Component} from 'react';
import ReactJson from 'react-json-view';

import './JsonViewer.scss';

export class JsonViewer extends Component {
  render() {
    const {data} = this.props;
    return (
      <div className="react-json-container">
        <ReactJson src={data} />
      </div>
    );
  }
}
