class Button {
  constructor(text) {
    this.removeButton = this.removeButton.bind(this);

    this.text = text;
    this.initButton();
    this.initListener();
  }

  initButton(){
    this.element = document.createElement('button');
    this.element.innerText = this.text;

    document.body.appendChild(this.element);
  }

  initListener(){
    this.element.addEventListener('click', this.removeButton);
  }

  removeButton(){
    document.body.removeChild(this.element);
  }
}