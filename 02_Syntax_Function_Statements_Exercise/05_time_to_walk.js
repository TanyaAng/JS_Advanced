function timeToWalk(steps, footprint, speed){
    let distanceInMeters = steps*footprint;
    let speedMetersInSec = speed/3.6;
    let time = distanceInMeters/speedMetersInSec;
    let rest = Math.floor(distanceInMeters/500);

    let timeInMin = Math.floor(time/60);
    let timeInSec = (time - (timeInMin*60)).toFixed(0);
    let timeInHours = Math.floor(time/3600);
    timeInMin+=rest;
    timeInHours+=Math.floor(timeInMin/60);
    timeInMin=timeInMin%60;
    let formattedH = timeInHours<10 ? `0${timeInHours}` :`${timeInHours}`;
    let formattedMin = timeInMin<10 ? `0${timeInMin}` :`${timeInMin}`;
    let formattedSeconds = timeInSec<10 ? `0${timeInSec}` :`${timeInSec}`;
    console.log(`${formattedH}:${formattedMin}:${formattedSeconds}`);
}

timeToWalk(4000,0.60,5);
timeToWalk(2564,0.70,5.5);
