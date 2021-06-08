class food1{
    constructor(){
     this.image = loadImage("Milk.png")
     this.foodStock = 0
    }
    getFoodStock() {
      if(foodS != undefined){
       var foodRef = database.ref("Food");
       foodRef.on("value",function(data){
         foodS = data.val();
      })
  }
}
      
  updateFoodStock(a) {
      database.ref("/").update({
          Food : a,
          FeedTime : hour()
      })
  }
  
  deductFood(x) {
      if(x <= 0) {
          x = 0;
        } else {
          x--;
        }
      database.ref("/").update({
          Food: x
      })
    }
    display(){
        var x = 80, y = 100
        imageMode(CENTER);
        image(this.image,120,440,70,70);

        if(foodS != 0){
           for(var i = 0;i < foodS;i++){
              if(i%10 == 0){
                  x = 80;
                  y = y + 50;
              }
              image(this.image,x,y,50,50)
                  x = x + 30;
              }
           }
        }

}