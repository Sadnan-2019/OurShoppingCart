function UpdateProductNumber(product, price, count) {
  // debugger;
  const ProductInput = document.getElementById(product + "-count");
  let ProductValue = ProductInput.value;
  if (count == true) {
    // IncreaseCount.value = IncreaseCountValue + 1;
    ProductValue = parseInt(ProductValue) + 1;
  } else if (ProductValue > 0) {
    // IncreaseCount.value = IncreaseCountValue - 1;
    ProductValue = parseInt(ProductValue) - 1;
  }
  ProductInput.value = ProductValue;
  const ProductTotalCount = document.getElementById(product + "-total");
  //   console.log(TotalCount);
  ProductTotalCount.innerText = ProductValue * price;

  CalculateTotal();
}

//calculation

function getInputValue(product) {
  const InputProduct = document.getElementById(product +"-count");
  const InputProductValue = parseInt(InputProduct.value);
  return InputProductValue;
}

function CalculateTotal() {
  const TotalProduct = getInputValue("phone") * 1219;
  const TotalCase = getInputValue("case") * 59;

  const SubTotal = TotalProduct + TotalCase;
  const TaxAmount = SubTotal / 10;
  const TotalPrice = SubTotal + TaxAmount;
  document.getElementById('sub-total').innerText = SubTotal;
  document.getElementById('tax-amount').innerText = TaxAmount;
  document.getElementById('total-price').innerText = TotalPrice;
//   console.log(SubTotal);





//   console.log(InputProductValue);
}

document.getElementById("phone-plus").addEventListener("click", function () {
  // console.log('ami nai');
  UpdateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  // console.log('ami nai');
  UpdateProductNumber("phone", 1219, false);
});

document.getElementById("case-increase").addEventListener("click", function () {
  // const IncreaseCount = document.getElementById('increase-count');
  // const IncreaseCountValue = parseInt(IncreaseCount.value)   ;
  // IncreaseCount.value = IncreaseCountValue + 1;
  //   UpdateCount("increase", 59,true);
  UpdateProductNumber("case", 59, true);

  // console.log(IncreaseCountValue);
  // console.log('amra aci')
});
document.getElementById("case-decrease").addEventListener("click", function () {
  // console.log('ami aber aci')
  //   const DecreaseCount = document.getElementById('increase-count');
  //   const DecreaseCountValue = parseInt(DecreaseCount.value) ;
  //   DecreaseCount.value =DecreaseCountValue - 1;
  //   console.log(DecreaseCountValue)
  UpdateProductNumber("case", 59, false);
});
