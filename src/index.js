module.exports = function toReadable(number) {
   const two_tens = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const degree = ['', '', ' hundred', ' thousand', ' million']

   let revers_number = [...Math.abs(number) + ''].reverse();
   let res = '';


   // РАЗБИРАЕМСЯ С ПЕРВОЙ СОТНЕЙ:
   //============================
   // if (number < 20) {
   //    res = two_tens[number];
   // }
   // if (number > 19 && number < 100) {
   //    res = tens[revers_number[1]] + ' ' + (revers_number[0] > 0 ? two_tens[revers_number[0]] : '');
   // }
   // return res.trim();
   //
   // Ужал все это в одну строку:
   // return number < 20 ? two_tens[number] : (tens[revers_number[1]] + ' ' + (revers_number[0] > 0 ? two_tens[revers_number[0]] : '')).trim();

   // запихнул в функцию для возврата последних двух степеней числа:
   function two_degree(n) {
      return n < 20 ? two_tens[n] : (tens[revers_number[1]] + ' ' + (revers_number[0] > 0 ? two_tens[revers_number[0]] : '')).trim();
   }

   // черновой вариант разбора с сотнями:
   // if (revers_number.length == 3) {
   //    res = two_tens[revers_number[2]] + degree[2] + ' ' + two_degree(Number % 100);
   // }

   //все условия для значений от 0 до 999 (тест проверяет только в этих пределах)
   return (number > 0 && number % 100 == 0) ? (two_tens[revers_number[2]] + degree[2]) : number > 99 ? (two_tens[revers_number[2]] + degree[2] + ' ' + two_degree(number % 100)) : two_degree(number);
}