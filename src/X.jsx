import React, {Component, PropTypes} from 'react';

function getWeirdOnChange(callback){
  return function(e){
    callback(e.target);
  }
}

class X extends Component{
  render(){
    const {onChange, ...others} = this.props;
    return (
      <input
        {...others}
        onChange={getWeirdOnChange(onChange)}
        />
    )
  }
}
export default X;