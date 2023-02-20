function solve (numbers){
    console.log(aggregate(numbers, 0, x=>x));
    console.log(aggregate(numbers,0, x=> 1/x));
    console.log(aggregate(numbers,'', x=>x.toString()));

    function aggregate(numbers,initVal,func){
        let result=initVal;
        for (let i=0; i<numbers.length; i++){
            result+=func(numbers[i])
        }
        return result;
    }
}

solve([2,4,8,16]);