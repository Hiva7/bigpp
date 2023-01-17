const canvas=document.getElementById('canvas1');
const ctx=canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width=600;
const CANVAS_HEIGHT=canvas.height=600;

//border & shared
let Top_Border=0;
let Left_Border=0;
let Bottom_Border=550;
let Right_Border=550;
let frame=50;
let size=50;

//player
let x=50;
let y=50;

//box1
let x1=100;
let y1=100;

//draw objects
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //player
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.fillRect(x, y, size, size);
    ctx.stroke();
    //boxes
    ctx.beginPath();
    ctx.fillStyle="blue";
    ctx.fillRect(x1, y1, size, size)
    ctx.stroke();
};

//controls
function up(){
    y-=frame;
    if(y<Top_Border){
        y+=frame;
    };
    if(x==x1 && y==y1){
        y1-=frame;
        if(y1<Top_Border){
            y1+=frame;
            y+=frame;
        };
    };
    requestAnimationFrame(animate);
};
function left(){
    x-=frame;
    if(x<Left_Border){
        x+=frame;
    };
    if(x==x1 && y==y1){
        x1-=frame;
        if(x1<Left_Border){
            x1+=frame;
            x+=frame;
        };
    };
    requestAnimationFrame(animate);
};
function down(){
    y+=frame;
    if(y>Bottom_Border){
        y-=frame;
    };
    if(x==x1 && y==y1){
        y1+=frame;
        if(y1>Bottom_Border){
            y1-=frame;
            y-=frame;
        };
    };
    requestAnimationFrame(animate);
};
function right(){
    x+=frame;
    if(x>Right_Border){
        x-=frame;
    };
    if(x==x1 && y==y1){
        x1+=frame;
        if(x1>Right_Border){
            x1-=frame;
            x-=frame;
        };
    };
    requestAnimationFrame(animate);
};

animate();