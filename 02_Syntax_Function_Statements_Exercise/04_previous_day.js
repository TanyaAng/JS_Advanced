function previousDay(year, month, day){
    let MyDate = new Date(year,month-1,day);
    MyDate.setDate(MyDate.getDate()-1);
    console.log(`${MyDate.getFullYear()}-${MyDate.getMonth()+1}-${MyDate.getDate()}`);
}

previousDay(2016,9,30);
previousDay(2016,10,1);
