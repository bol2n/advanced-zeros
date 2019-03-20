module.exports = function getZerosCount(number, base) {
    let primeNumber = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,
      97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251];
    var count = [];
    for (var i = 0; i < primeNumber.length;) {
      if (base/primeNumber[i]==1) {
        var base = base / primeNumber[i];
        count.push(primeNumber[i]);
        i = 0;
      }
      else if (base%primeNumber[i]==0) {
        var base = base / primeNumber[i];
        count.push(primeNumber[i]);
        i = 0;
      }
      else {
        i++;
      }
      console.log();
    }
    var k = 1;
    var total = 0;
    var zeros = [];
    var repeat = [];
    console.log(count);
    for (var i = 0; i < count.length; i++) {
      var total = 0;
      var k = 1;
        if (count[i] == count[i+1]) {
          while (number/Math.pow(count[i],k) > 1) {
            var getCount = Math.floor(number/Math.pow(count[i],k));
            total += getCount;
            k++;
          }
            repeat.push(total);
        }
        else if (count[i] != count[i+1] && count[i] == count[i-1]) {
          while (number/Math.pow(count[i],k) > 1) {
            var getCount = Math.floor(number/Math.pow(count[i],k));
            total += getCount;
            k++;
          }
          repeat.push(total);
          zeros.push(Math.floor(repeat[repeat.length-1]/repeat.length));
          repeat=[];
        }
        else {
          var total = 0;
          var getCount = 0;
          while (number/Math.pow(count[i],k) > 1) {
            var getCount = Math.floor(number/Math.pow(count[i],k));
            total += getCount;
            k++;
          }
          zeros.push(total);
        }
    }
    return Math.min(...zeros);
}
