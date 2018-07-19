
function produceDrivingRange(blocks) {
  return function(start, end) {
    let result = (parseInt(end.slice(0,-2)) - parseInt(start.slice(0,-2)))-blocks;
    return result < 0 ? `within range by ${Math.abs(result)}` : `${result} blocks out of range`;
  }
}

function produceTipCalculator(percent) {
  return function(bill) {
    return bill * percent;
  }
}

function createDriver() {

}

// let eightBlockRange = produceDrivingRange(8)
// console.log(eightBlockRange('10th', '20th'));
// console.log(eightBlockRange('10th', '14th'));
