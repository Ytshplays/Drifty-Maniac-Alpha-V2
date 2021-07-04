class Form {

  constructor() {
 this.input = createInput("").attribute("placeholder", "Username");
    this.button = createButton('Login');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.passwordInput = createInput("").attribute("placeholder", "Password")
    this.reset = createButton('Reset');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.passwordInput.hide()
  }

  display(){
    this.title.html("Drifty Maniac");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 160);
    this.passwordInput.position(displayWidth/2 - 40 , displayHeight/2 - 80);

    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.passwordInput.hide()
      player.name = this.input.value();
      player.password = this.input.value("hialliamtheowner")
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    
    database.ref("/").update({
      players: null,
      finishedPlayers: 0,
    });});
  }
}
