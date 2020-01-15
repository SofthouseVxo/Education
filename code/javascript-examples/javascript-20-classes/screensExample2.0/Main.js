class Main {
  constructor(){
    this.initButtons();
    this.addEventListeners();
  }

  initButtons(){
    let bodyRef = document.body;

    this.mainButton = document.createElement('button');
    this.mainButton.innerText = 'Main';
    bodyRef.appendChild(this.mainButton);
    
    this.profileButton = document.createElement('button');
    this.profileButton.innerText = 'Profile';
    bodyRef.appendChild(this.profileButton);
  }

  addEventListeners(){
    this.mainButton.addEventListener('click', () => {
      this.changeScreen('main');
    })

    this.profileButton.addEventListener('click', () => {
      this.changeScreen('profile');
    })
  }

  changeScreen(screenType){
    if(this.activeScreen) this.activeScreen.removeMe();

    switch(screenType) {
      case 'main':
        this.activeScreen = new MainScreen();
        break;
      case 'profile':
        this.activeScreen = new ProfileScreen();
        break;
      default:
        this.activeScreen = new MainScreen();
    }
  }
}

document.addEventListener('DOMContentLoaded', function(){
  let mainObj = new Main();
})