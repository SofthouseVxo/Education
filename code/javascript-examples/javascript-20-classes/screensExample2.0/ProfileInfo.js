class ProfileInfo {
  constructor(_parentElement, _info){
    this.parentElement = _parentElement;
    this.info = _info;

    this.initElement();
  }

  initElement(){
    let nameElementRef = document.createElement('p');
    nameElementRef.textContent = this.info;
    nameElementRef.className = 'profile-info';

    this.parentElement.appendChild(nameElementRef);
  }
}