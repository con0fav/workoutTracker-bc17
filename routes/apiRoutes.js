const db = require("../models");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", ({}, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post ("api/workouts", (req, res) => {
        db.Workout.create(req.body)
        .then((workout) =>  {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

}