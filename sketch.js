//Create variables here
var foodstock
var dog
var happyDog
var database
var foodS = 0
var foodstock
var happydogimage
var dogimage
var milkimage
var foodstock
var lastfed
var feeddog
var feedthedogbutton
var addmorefoodbutton
var milkbottle1, milkbottle2, milkbottle3, milkbottle4, milkbottle5, milkbottle6
var milkbottle7, milkbottle8, milkbottle9, milkbottle10, milkbottle11, milkbottle12
var milkbottle13, milkbottle14, milkbottle15, milkbottle16, milkbottle17, milkbottle18
var milkbottle19, milkbottle20
var thefood
var addfood
var lastFed
var feed
var FeedTime
var feeddog1
var addfood1

function preload()
{
	//load images here
  dogimage = loadImage("Dog.png")
  happydogimage = loadImage("happydog.png")
  milkimage = loadImage("Milk.png")
}

function setup() {
	createCanvas(800, 700);
  thefood = new food1()
  database = firebase.database();
  dog = createSprite(400,350)
  dog.addImage("dog", dogimage)
  feeddog1 = createButton("Feed the dog")
  addfood1 = createButton("Add food")
  feeddog1.position(700,95)
  addfood1.position(800,95)
  feeddog1.mousePressed(feedDog)
  addfood1.mousePressed(addFoods)
}


function draw() {  
  background(46,139,87)
  dog.scale = 0.2
  fill(0,0,0)
  text("Food remaining: "+foodS,350,250)
  drawSprites();
  fill(255,255,254)
  textSize(15)
  if(lastFed >= 12){
    text("last feed:"+lastFed%12 + "PM", 350, 30)
  }else if(lastFed == 0){
    text("Last feed: 12 AM", 350, 30)
  }else{
    text("Last feed:" + lastFed + "AM", 350, 30)
  }
  thefood.display()
  fedtime = database.ref("FeedTime");
  fedtime.on("value", function(data){
     lastFed = data.val()
  });
  //add styles here

}


function feedDog(){
  thefood.getFoodStock()
  console.log(thefood.getFoodStock())
  thefood.deductFood(foodS)
  thefood.updateFoodStock(foodS)
}

function addFoods(){
  foodS++;
  database.ref("/").update({
    Food:foodS
  })
}



