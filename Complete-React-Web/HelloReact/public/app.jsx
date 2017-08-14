var GreeterMessage = React.createClass({
  
  render: function(){
    return (
        <div>
          <h1>Some h1</h1>
          <p>Some p1</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  
  render: function(){
    return (
        <form>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      );
    }
});



var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function () {
    return {
        name: this.props.name
    };
  },
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    /* cleaning the input text */
    var name = nameRef.value;
    nameRef.value = '';

    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>

        /*Nested Components*/
        <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>

      /*Nested Components*/
      <GreeterForm/>
    );
  }
});

var firstName = 'Andrew';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);