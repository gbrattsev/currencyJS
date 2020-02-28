'use strict';

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd'),
    inputEuro = document.querySelector('#eur');

inputRub.addEventListener('input', () => {
  let request = new XMLHttpRequest();
  request.open('GET', 'current.json');
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();

  request.addEventListener('readystatechange', function() {
    if (request.readyState === 4 && request.status == 200) {
      let data = JSON.parse(request.response);
      console.log(data);
      inputUsd.value = (inputRub.value / data.Valute.USD.Value).toFixed(2);
      inputEuro.value = (inputRub.value / data.Valute.EUR.Value).toFixed(2);
    } else {
      inputUsd.value = 'Сервер не отвечает';
      
    }
  });
});