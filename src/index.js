exports.min = function min(array) {
    if (!(array instanceof Array)) return 0;
    if (array.length !== 0) return Math.min(...array)
    else return 0;
}

exports.max = function max(array) {
    if (!(array instanceof Array)) return 0;
    if (array.length !== 0) return Math.max(...array)
    else return 0;
}

exports.avg = function avg(array) {
    if (!(array instanceof Array)) return 0;
    if (array.length !== 0) {
        let res = 0;
        for (let i in array) {
            res += array[i];
        }
        return res / array.length;
    } else return 0;
}