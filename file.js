function subtractArray(first, second) {
    var result = [];
    for(var i = 0; i<first.length; i++) {
        var current = first[i];
        var position = second.indexOf(current);
        if(-1 === position){
            result.push(current);
        }
    }
    return result;
}

module.exports = subtractArray;