import React from 'react';
import getCookieValue from '../../../functions'
import { root } from '../../../constants'

class Brightness extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const container = {
      float: 'left',
      marginLeft: '5px',
      height: "30px",
    }

    const title = {
      color: "#777",
      fontSize: 25,
      lineHeight: "30px",
      verticalAlign: "middle",
    };

    return (
      <div style={container}>
        <span style={title}>{this.props.brightness} %</span>
      </div>
    );
  }
}

export default Brightness
