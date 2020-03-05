class StateHandler {

  constructor(){
    this.state = {
      color: 'blue'
    }
  }

  toggleColor = () => {
    if (this.state.color = 'blue'){
      this.color = 'pink';
    } 

    if (this.state.color != 'blue'){
      this.state.color = 'blue';
    }    
  }
}

// What is wrong with toggleColor?