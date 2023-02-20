function wordsUppercase (text){
    result=text.match(/\w+/g).join(', ').toUpperCase();
    console.log(result);
}

wordsUppercase('Hi, how are you?');