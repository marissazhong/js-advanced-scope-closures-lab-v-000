
function produceDrivingRange(blocks) {
  return function(start, end) {
    let result = (parseint(end.slice(0,-2)) - parseint(start.slice(0,-2)))-blocks;
    result < 0 ? return '${result} blocks out of range' : return 'within range by ${result}';
  }
}

function produceTipCalculator() {

}

function createDriver() {

}

let eightBlockRange = produceDrivingRange(8)
console.log(eightBlockRange('10th', '20th'));
('2 blocks out of range')
expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')
