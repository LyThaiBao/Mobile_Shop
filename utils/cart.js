
export function saveProductToCart(product) {
  const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
  const newCart = [...currentCart, product];
  localStorage.setItem("cart", JSON.stringify(newCart));
}