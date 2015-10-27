var React = require('react');
var ReactDOM = require('react-dom');

var Form = React.createClass( {
  getInitialState(){
    return {
      name: '',
      address: ''
    }
  },
  setField(key){
    return (e)=>{
      this.setState({
        [key]: e.target.value
      })
    }
  },
  render(){
    const {name, address} = this.state;
    return (
      <div>
        <form>
          <label >name: </label>
          <input
            value={name}
            onChange={this.setField('name')}
            />
          <label >address: </label>
          <input
            value={address}
            onChange={this.setField('address')}
            />
        </form>
      </div>

    )
  }
});

ReactDOM.render(<Form/>, document.getElementById('container'));