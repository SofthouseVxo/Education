class Screen {
  constructor(content){
    this.content = content;
    this.initElement();
  }

  initElement(){
    this.wrapperElement = document.createElement('div');
    this.wrapperElement.innerText = this.content;
    document.body.appendChild(this.wrapperElement);
  }

  removeMe(){
    document.body.removeChild(this.wrapperElement);
  }
}