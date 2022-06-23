module.exports = function toReadable(number) {
   const two_tens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const degree = ['', '', ' hundred', ' thousand', ' million']
   let revers_number = [...Math.abs(number) + ''].reverse();
   let res = '';
   function two_degree(n) {
      return n < 20 ? two_tens[n] : (tens[revers_number[1]] + ' ' + (revers_number[0] > 0 ? two_tens[revers_number[0]] : '')).trim();
   }
   return (number > 0 && number % 100 == 0) ? (two_tens[revers_number[2]] + degree[2]) : number > 99 ? (two_tens[revers_number[2]] + degree[2] + ' ' + two_degree(number % 100)) : two_degree(number);
}