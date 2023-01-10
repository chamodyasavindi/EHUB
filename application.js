var cart = [];

function addToCart(item) {
  if (!cart.includes(item.id)) {
    cart.push(item.id);
    const cartItems = document.getElementById("cartItems");
    // let listItem = `<li id="list-item-${item.id}">${item.name} <i class="fa-solid fa-circle-xmark" onclick="removeCartItem(${item.id})"></i></li>`;
    let listItem = `
        <li id="list-item-${item.id}">
            <div class="container mx-4 my-4">
                <div class="w-64 border">
                <div class="p-4">
                    <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">${item.name}</h5>
                    <p>$${item.price}</p>
                    <button href="#" onclick="removeCartItem(${item.id})" class="bg-red-500 hover:bg-red-400 text-white px-4 py-2 inline-block mt-4 rounded"><i class="fa-solid fa-circle-xmark"></i></button>
                </div>
                </div>
            </div>
      </li>`;
    cartItems.innerHTML += listItem;
  }
}

function removeCartItem(itemId) {
  const cartItems = document.getElementById("cartItems");
  let i = document.getElementById("list-item-" + itemId);
  cartItems.removeChild(i);
  delete cart[cart.indexOf(itemId)];
}
