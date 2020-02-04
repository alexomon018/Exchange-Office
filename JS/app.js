const DOMstrings = {
  currencyEl_one: document.querySelector("#currency-1"),
  currencyEl_two: document.querySelector("#currency-2"),
  amountEL_one: document.querySelector("#amount-one"),
  amountEL_two: document.querySelector("#amount-two"),
  rateEl: document.querySelector("#rate"),
  swap: document.querySelector("#swap")
};

DOMstrings.currencyEl_one.addEventListener("change", calaculate);
DOMstrings.currencyEl_two.addEventListener("input", calaculate);
DOMstrings.amountEL_one.addEventListener("change", calaculate);
DOMstrings.amountEL_two.addEventListener("input", calaculate);
DOMstrings.swap.addEventListener('click',() => {
  const temp = DOMstrings.currencyEl_one.value;
  DOMstrings.currencyEl_one.value = DOMstrings.currencyEl_two.value;
  DOMstrings.currencyEl_two.value=temp;
  calaculate();
})


function calaculate() {
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const currencyOne = DOMstrings.currencyEl_one.value;
  const currencyTwo = DOMstrings.currencyEl_two.value;
  console.log(currencyOne);

  fetch(`${proxy}https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
      const rate = data.rates[currencyTwo];
      DOMstrings.rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      DOMstrings.amountEL_two.value = (DOMstrings.amountEL_one.value * rate).toFixed(2);


    });
}

calaculate();
