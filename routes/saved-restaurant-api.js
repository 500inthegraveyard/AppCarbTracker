var db = require("../models");


module.exports = function(app) {
    app.get("/api/savedrestaurant", function(req, res) {
      db.Restaurant.findAll({
        include: [db.Food]
      }).then(function(results) {
        res.json(results);
      })
      .catch(function(err){
          res.json(err);
      });
    });
}

// app.get("/", function(req, res) {
//     res.send("App works!!");
// });