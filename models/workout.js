const mongoose = require("mongoose");

//building what an item in the db looks like
//like a prototype

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [
        {
          type: {
              type: String,
              trim: true,
              required: "Enter workout type"
          },
          name: {
              type: String,
              trim: true,
              required: "Enter workout name"
          } ,
          duration: {
              type: Number,
              required: "How long?"
          } ,
          weight: {
              type: Number,
          } ,
          reps: {
              type: Number,
          } ,
          sets: {
              type: Number,
          } ,
          distance: {
              type: Number,
          }
        }
      ]
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;