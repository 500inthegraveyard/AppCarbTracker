var db = require("../models");


module.exports = function(app) {
    app.get("/api/savedrestaurant", function(req, res) {
      db.Restaurant.findAll({include: [
        {
          model: db.Food,
        }
      ]
    }).then(Restaurant => {
      const resObj = Restaurant.map( ({dataValues}) => {
        //desired object
        // {
        //     name: dataValues.name,
        //     food: [
        //         {
        //             meal: "",
        //             netCarbs: 0
        //         }
        //     ]
        // }
        return {
            name: dataValues.name,
            food: getFood(dataValues.Food)
        }
        // //tidy up the user data
        // return Object.assign(
        //   {},
        //   {
        //     name: Restaurant.name.map(post => {

        //       //tidy up the post data
        //       return Object.assign(
        //         {},
        //         {
                  
        //           meal: Food.meal,
        //           netCarbs: Food.netCarbs.map
        //         }
        //         )
        //     })
        //   }
        // )
      });
      res.json(resObj)
    });
  });
}
        
      
function getFood(foodArray){
    //loop through dataValues and return an array of food
    // [
    //         {
    //             meal: "",
    //             netCarbs: 0
    //         }
    //     ]
    return foodArray.map(({dataValues})=>{
        return {
            meal: dataValues.meal,
            netCarbs: dataValues.netCarbs,
        }
    })
}



