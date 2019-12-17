class Screen {
  constructor(content){
    this.content = content;
    this.initElement();
  }

  initElement(){
    this.element = document.createElement('div');
    this.element.innerText = this.content;
    document.body.appendChild(this.element);
  }

  removeMe(){
    document.body.removeChild(this.element);
  }
}