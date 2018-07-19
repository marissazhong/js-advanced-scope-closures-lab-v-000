
function produceDrivingRange(blocks) {
  return function(start, end) {
    let result = (parseint(end.slice(0,-2)) - parseint(start.slice(0,-2)))-blocks;
    return result < 0 ? '${result} blocks out of range' : 'within range by ${result}';
  }
}

function produceTipCalculator() {

}

function createDriver() {

}

let eightBlockRange = produceDrivingRange(8)
console.log(eightBlockRange('10th', '20th'));
console.log(eightBlockRange('10th', '14th'));
