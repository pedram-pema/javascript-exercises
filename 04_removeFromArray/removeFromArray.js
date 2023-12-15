const removeFromArray = function(arr, ...params) {
    let removable;
    let paramsLength = params.length;
    for( i = 0; i < paramsLength; i++ ) {
        removable = arr.indexOf(params[i]);
        if (removable === -1) continue;
        arr.splice(removable, 1);
    }
    return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
