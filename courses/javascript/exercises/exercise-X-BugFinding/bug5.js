class Boat {

  boatRef = null;
  noise = null;

  constructor(){
    this.initBoat();
    this.initEventListeners();
  }

  initBoat(){
    this.boatRef = document.createElement('div');
    this.boatRef.style.width = '200px';
    this.boatRef.style.height = '200px';
    this.boatRef.style.backgroundColor = 'blue';
    document.body.appendChild(this.boatRef);
  }

  initEventListeners(){
    this.boatRef.addEventListener('click', this.makeNoise);
  }

  makeNoise(){
    this.noise = 'tuuuuuut';
  }
}

let boat = new Boat();
console.log(boat); // Why is noise still null?