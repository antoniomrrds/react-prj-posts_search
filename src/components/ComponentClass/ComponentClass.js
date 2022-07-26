import { Component } from "react";


class ComponentClass extends Component {
  // constructor(props) {
  //   super(props);
  //   // Nesta linha esta fazendo o bind 
  //   this.handlerPClick = this.handlerPClick.bind(this);
  //   this.state = {
  //     name: 'Antonio marcos',
  //     counter: 0
  //   }
// }

    state = {
      name: 'Antonio marcos',
      counter: 0
    
  }

  handlerPClick=()=> {
     this.setState({ name: 'Scorpion' })
  }

  handlerAClick = (event) => {
    event.preventDefault();
  
    const { counter } = this.state;
    this.setState({ counter:counter + 1 })
  }
  render() {
    const { name,counter } = this.state
    return(

    <div >

      
      <h1 >{this.props.text_label} || count: {counter}</h1>
      <h1 onClick={this.handlerPClick}>{name}</h1>
      <a 
      onClick={this.handlerAClick}
      className="ComponentClass"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      >
          Learn React
        </a>
        
        </div>

        )
  
  }

}

export default ComponentClass