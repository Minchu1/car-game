class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.restart= createButton('restart');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background("lightblue");
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    rank1=createElement("h2");
    rank2=createElement("h2");
    rank3=createElement("h2");
    rank4=createElement("h2");

    rank1.position(displayWidth/2-150,120);
    //rank2.position(displayWidth/2-150,140);
    //rank3.position(displayWidth/2-150,160);
    //rank4.position(displayWidth/2-100,180);
    

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.restart.position(displayWidth-100,20);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });
    
    this.restart.mousePressed(()=>{
      if(gameState===2){
        player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
      database.ref("/").update({
        rank:""

      })
      
      }
      

    })
    

  }
  
}
