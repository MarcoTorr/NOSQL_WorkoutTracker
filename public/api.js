const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];
    let resWorkouts;
        try {
          resWorkouts = await fetch("/api/workouts");
        } catch (err) {
          console.log(err)
        }
        const resWorkoutsJson = await resWorkouts.json();
        const lastWorkout = resWorkoutsJson[resWorkoutsJson.length - 1];
        console.log(lastWorkout)
    
        let exercisesToSave = [];
        if(lastWorkout._id === id) {
          exercisesToSave = lastWorkout.exercises;
          exercisesToSave.push(data)
        }
        console.log(exercisesToSave);
    
    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(exercisesToSave)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
