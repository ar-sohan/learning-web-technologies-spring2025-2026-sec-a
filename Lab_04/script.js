const btn = document.getElementById("checkout");

btn.addEventListener("click", function () {
  const productIdInput = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;

  const products = [
    {
      id: 1,
      price: 200,
      quantity: 120,
    },
    {
      id: 2,
      price: 80,
      quantity: 20,
    },
    {
      id: 3,
      price: 120,
      quantity: 10,
    },
  ];

  const selectedProduct = products.find((item) => item.id == productIdInput);
  if (selectedProduct.quantity >= quantity) {
    
    let totalPrice = selectedProduct.price * quantity;
    document.getElementById("totalPrice").innerHTML = totalPrice + "$";
    console.log(selectedProduct);
    console.log(productIdInput.price, productIdInput.quantity);
  }
  else
  {
    alert("Out Of stock. Please select a valid quantity.");
  }
});
