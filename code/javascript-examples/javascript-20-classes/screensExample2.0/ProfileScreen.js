class ProfileScreen extends Screen {
  constructor(){
    let content = 'Welcome To ProfileScreen';
    super(content);
    this.initProfileInfo();
  }

  initProfileInfo(){

    new ProfileInfo(this.wrapperElement, GlobalInfo.getloggedInUser());
    new ProfileInfo(this.wrapperElement, 19);
    new ProfileInfo(this.wrapperElement, 'Växjö');

  }
}