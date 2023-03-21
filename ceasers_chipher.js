function caesarCypher(string, num) {
    let split = string.split("");
    for (let i = 0; i < split.length; i++) {      
        split[i] = split[i].charCodeAt(0) ;
        if (split[i] === 32){

        }else{
            split[i] = split[i] + num;
        }
       
        if (split[i] >= 122){
            split[i] = split[i] - 26;
        }
              
        split[i] = String.fromCharCode(split[i]);       
    }
    split = split.join("");
    return split;
}

caesarCypher('hello world', 13);