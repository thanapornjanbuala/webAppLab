
function Hero(name) {
    this.name = name;
  }
  
  Hero.prototype.sayName = function () {
    console.log("My hero's name is " + this.name);
  };

  const myHero = new Hero("Link");

  myHero.sayName(); 
  