const SortKey = {
  /* ** Sample Sort Identifiers ** */
  SampleStartDate: 'SampleStartDate', // Sort samples based on their start date.
  SampleEndDate: 'SampleEndDate', // Sort samples based on their end date.
  /* ** Workout Sort Identifiers ** */
  WorkoutDuration: 'WorkoutDuration', // Sort workouts based on their duration.
  WorkoutTotalDistance: 'WorkoutTotalDistance', // Sort workouts based on their total distance.
  WorkoutTotalFlightsClimbed: 'WorkoutTotalFlightsClimbed', // Sort workouts based on the number of flights of steps climbed.
  WorkoutTotalEnergyBurned: 'WorkoutTotalEnergyBurned', // Sort workouts based on the total energy burned.
  WorkoutTotalSwimmingStrokeCount: 'WorkoutTotalSwimmingStrokeCount', // Sort workouts based on the number of swimming strokes.
} as const;

export default SortKey;
