const app = require("express").Router();
const db = require("../models");


app.get("/api/workouts", (req, res) => {
    db.Workout.find()
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
});

// aggregation method https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/

app.get("/api/workouts/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" },
                totalWeight: { $sum: "$exercises.weight" }
            }
        }
    ])
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then((workouts) => {
            res.json(workouts);
        })
        .catch(err => {
            res.json(err);
        });
});

app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
        {
            _id: req.params.id
        },
        {
            exercises: req.body
        }
    )
        .then((workout) => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        })
});

module.exports = app;