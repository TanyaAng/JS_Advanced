function dayOfWeek(day){
    let days=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (days.includes(day)){
        switch (day){
            case "Monday": console.log(1); break;
            case "Tuesday": console.log(2); break;
            case "Wednesday": console.log(3); break;
            case "Thursday": console.log(4); break;
            case "Friday": console.log(5); break;
            case "Saturday": console.log(6); break;
            case "Sunday": console.log(7); break;
        }

} else {
    console.log('error');
}
}

dayOfWeek('Monday');