'use strict';

let inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd'),
    inputEuro = document.querySelector('#eur');


inputRub.addEventListener('input', () => {

  function getData() {

    return new Promise(function(resolve, reject) {

      let request = new XMLHttpRequest();
      request.open('GET', 'js/current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send();

      request.onload = function() {
        if(request.readyState === 4) {
                if(request.status == 200) {
                    resolve(this.response)
                }
                else {
                    reject();
                
                }
        }
      }
    });
  }
  
  getData()
      .then(response => {
        let data = JSON.parse(response);
        inputUsd.value = (inputRub.value / data.Valute.USD.Value).toFixed(2);
        inputEuro.value = (inputRub.value / data.Valute.EUR.Value).toFixed(2);
      })
      .catch(() => inputUsd.value = 'Сервер не отвечает')
});