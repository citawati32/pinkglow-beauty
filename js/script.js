let cart = [];
let total = 0;

// Tambah produk ke keranjang
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  updateCart();
  openCart();
}

// Update isi keranjang
function updateCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - Rp " + item.price;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

// Buka keranjang
document.getElementById("cart-btn").onclick = function(){
  openCart();
};

function openCart(){
  document.getElementById("cart").style.right = "0";
}

function closeCart(){
  document.getElementById("cart").style.right = "-400px";
}

// Checkout
function checkout(){
  alert("Terima kasih sudah berbelanja di PinkGlow Beauty 💖");
  cart = [];
  total = 0;
  updateCart();
  document.getElementById("cart-count").innerText = 0;
}
