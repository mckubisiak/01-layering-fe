import React, { Component } from 'react';
import randomColor from 'randomcolor';
import Display from './app/Display';



class colorChanger extends Component {
state = {
  bgColor: 'yellow'
}

handleColorChange() {
  const color = randomColor();
  this.setState({
    bgColor: color,
  });
}

componentDidMount() {
  setInterval(this.handleColorChange.bind(this), 1000);
} 


render() {
  return (
    <>
      <Display bgColor={this.state.bgColor} />
    </>
  );
}

}

export default colorChanger;
