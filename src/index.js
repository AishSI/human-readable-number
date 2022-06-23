module.exports = function toReadable(number) {
   const two_tens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const degree = ['', '', 'hundred', 'thousand']

   let revers_number = [...Math.abs(number) + ''].reverse();
   let res = '';

   debugger;

   // разбираемся с первой сотней
   if (number < 20) {
      res = two_tens[number];
   }
   if (number > 19 && number < 100) {
      res = tens[revers_number[1]] + ' ' + (revers_number[0] > 0 ? two_tens[revers_number[0]] : '');
   }
   return res.trim();


}