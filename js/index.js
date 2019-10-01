//
//  Index.html
//  RainSimulator
//
//  Created by Thiago Souza on 01/10/19.
//  Copyright © 2019 Thiago Souza. All rights reserved.
//

var Animation;
var running = true;
var gotas = [];
var qtdgotas = 150;

function Start(){
    Animation = createAnimation(800,800);
    document.body.appendChild(Animation[0]);
    createGotas(qtdgotas);

    setInterval(Update, 10);

}

function Stop(){
    running = false;
}

function Update(){ 
    running == true ? (
        showBackground(),
        showGotas(qtdgotas)
        ):(false);
}

function createAnimation(widthWindow, heightWindow){

    this.canvasWindow = document.createElement('canvas');
    this.canvasWindow.id = "MyAnimation";
    this.canvasWindow.width = widthWindow;
    this.canvasWindow.height = heightWindow;

    this.context = canvasWindow.getContext('2d');
    
    return [this.canvasWindow,this.context];
}


function showBackground(){
    Animation[1].clearRect(0, 0, Animation[0].width, Animation[0].height); 
    Animation[1].fillStyle = 'rgb(0, 0, 0)';
    Animation[1].fillRect(0, 0, Animation[0].width, Animation[0].height);
}

function gotasModel(){
    this.x = Math.floor(Math.random() * (Animation[0].width - 0)) + 0;
    this.y = Math.floor(Math.random() * (-800 + 0)) + 0,
    this.speed = 10;
    this.width = 3;
    this.height = 20;
    this.scale = (Math.floor(Math.random() * (1 + 1)) + 1)/3;

    this.fall = function(){
        this.y += this.speed;

        this.y > Animation[0].height ?(
            this.y = Math.floor(Math.random() * (-800 + 0)) + 0,
            this.x = Math.floor(Math.random() * (Animation[0].width - 0)) + 0) : false;
    }

    this.show = function(){
        Animation[1].fillStyle = 'blue';
        Animation[1].fillRect(this.x, this.y, this.width * this.scale, this.height * this.scale);
    }
}

function createGotas(quantidade){
    
    for(i=0; i <= quantidade; i++)
    {
        gotas[i] = new gotasModel();
    }
    
}

function showGotas(quantidade){
    for(i=0; i <= quantidade; i++)
    {
        gotas[i].fall();
        gotas[i].show();
    }
}