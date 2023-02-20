function previousDay(year, month, day){
    let givenDate = new Date(year,month,day);
    let previousDate = new Date(givenDate);
    previousDate.setDate(givenDate.getDate()-1);
    console.log(`${previousDate.getFullYear()}-${previousDate.getMonth()}-${previousDate.getDate()}`);
}

previousDay(2016,9,30);