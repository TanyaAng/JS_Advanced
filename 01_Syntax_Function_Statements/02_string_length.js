function stringLength (text1, text2, text3){
    let sumLength=text1.length+text2.length+text3.length;
    let averageLength=Math.floor(sumLength/3);
    console.log(sumLength);
    console.log(averageLength);
};

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');