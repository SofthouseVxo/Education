class MainScreen extends Screen {
  constructor(){
    let content = 'Welcome To MainScreen';
    super(content);

    this.initInput();
  }

  initInput(){
    let nameInput = document.createElement('input');

    nameInput.addEventListener('input', this.onInput);

    this.wrapperElement.appendChild(nameInput);
  }

  onInput(e){
    GlobalInfo.loggedInUser = e.target.value;
  }
}