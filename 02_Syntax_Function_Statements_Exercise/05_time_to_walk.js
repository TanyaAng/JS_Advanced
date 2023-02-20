function timeToWalk(steps, meters, speed){
    let total_km = steps*meters/1000;
    let minutes_for_break = Math.floor(total_km/0.5);
    let hours_for_break = minutes_for_break/60;
    let total_time_in_hours=total_km/speed + hours_for_break;
    console.log(total_time_in_hours);
}

timeToWalk(4000,0.60,5);
timeToWalk(2564,0.70,5.5);
