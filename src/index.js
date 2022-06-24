module.exports = function toReadable(number) {
   const num_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   const degree = ['', ' thousand ', ' million ', ' billion ', ' trillion ', ' quadrillion ', ' quintillion ', ' sextillion '];
   let arr_rev = [...Math.abs(number) + ''].reverse(); //перегоняем число в массив с реверсом - так легче резать его на "трешки"
   let arr_number_3 = [];
   let i = 0;
   res = [];

   // режем массив числа на "трешки" - разряды (числа в них идут наоборот - слева-направо)
   while (i < arr_rev.length) {
      arr_number_3.push(arr_rev.slice(i, i += 3));
   }
   // хуманно реадаблим 2 разряда (десятки)
   function three_degree(x, j) {
      return (x > 0 && x % 100 == 0) ? (num_19[arr_number_3[j][2]] + ' hundred') : x > 99 ? (num_19[arr_number_3[j][2]] + ' hundred' + ' ' + two_degree(x % 100, j)) : two_degree(x, j);
   }
   //человечим 3 разряда (сотни)
   function two_degree(n, j) {
      return n < 20 ? num_19[n] : (tens[arr_number_3[j][1]] + ' ' + (arr_number_3[j][0] > 0 ? num_19[arr_number_3[j][0]] : '')).trim();
   }
   // бегаем по "трешкам", человечим по разрядно, добавляем названия тыщ, миллионов и всего такого прочего
   // для облегчения, подстановок из массивов, трешки идут слева направо - по мере возрастания разрядов
   for (let j = 0; j < arr_number_3.length; j++) {
      let number_3 = arr_number_3[j].join('');
      res[j] = three_degree([...number_3].reverse().join(''), j) + degree[j]; //число приводим в нормальный вид - реверсим обратно
   }
   return res.reverse().join(''); //последний раз реверсим массив с результатами, расставляя трешки в человечем порядке.
}