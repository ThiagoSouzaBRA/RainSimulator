//
//  Index.html
//  RainSimulator
//
//  Created by Thiago Souza on 01/10/19.
//  Copyright © 2019 Thiago Souza. All rights reserved.
//

var Animation;
var running = true;

function Start(){
    Animation = createAnimation(800,800);
    document.body.appendChild(Animation[0]);
    setInterval(Update, 100);
}

function Stop(){
    running = false;
}

function Update(){ 
    running == true ? (
        clearAnimation(),
        showBackground()
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

function clearAnimation(){
    Animation[1].clearRect(0, 0, Animation[0].width, Animation[0].height); 
}

function showBackground(){
    Animation[1].fillStyle = 'rgb(0, 0, 0)';
    Animation[1].fillRect(0, 0, Animation[0].width, Animation[0].height);
}

