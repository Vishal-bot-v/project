function preload()
{
   img = loadImage('https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
}
 
function setup()
{
   canvas = createCanvas(640, 480);
   canvas.position(110, 250);
   video = createCapture(VIDEO);
   video.hide();
 
   tint_color = "";
 
}
 
function draw() {
   image(img, 175, 110, 300, 240);
   
   fill(0, 128, 0);
   stroke(0, 128, 0);
   circle(80, 50, 70);
   circle(550, 50, 70);
   circle(80, 400, 70);
   circle(550, 400, 70);
   line(550, 100, 85);
}
 
function take_spanshot()
{
   save('my_image.png');
}
 

