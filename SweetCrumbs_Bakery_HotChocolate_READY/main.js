const products = [
  ["Classic Chocolate Cake","Cakes",1899,"https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80","Rich chocolate sponge with creamy layers."],
  ["Red Velvet Cake","Cakes",2299,"https://images.unsplash.com/photo-1586788224331-947f68671cf1?auto=format&fit=crop&w=800&q=80","Soft red velvet with smooth cream cheese frosting."],
  ["Vanilla Celebration Cake","Cakes",1699,"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80","Light vanilla cake perfect for celebrations."],
  ["Black Forest Cake","Cakes",2499,"https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=800&q=80","Chocolate cake with cherries and whipped cream."],
  ["Strawberry Cream Cake","Cakes",2199,"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80","Fresh strawberries layered with cream."],
  ["Lotus Biscoff Cake","Cakes",2599,"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80","Caramelized biscuit flavor in every bite."],
  ["Chocolate Cupcake","Cupcakes",299,"https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80","Soft chocolate cupcake with chocolate swirl."],
  ["Vanilla Cupcake","Cupcakes",249,"https://images.unsplash.com/photo-1587668178277-295251f900ce?auto=format&fit=crop&w=800&q=80","Classic vanilla sponge with buttercream."],
  ["Oreo Cupcake","Cupcakes",349,"https://images.unsplash.com/photo-1614707267537-2b6c3a0f9d6a?auto=format&fit=crop&w=800&q=80","Cookies and cream cupcake topped with Oreo."],
  ["Red Velvet Cupcake","Cupcakes",329,"https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80","Mini red velvet treat with creamy topping."],
  ["Salted Caramel Cupcake","Cupcakes",379,"https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&w=800&q=80","Sweet caramel balance with a salted finish."],
  ["Glazed Donut","Donuts",199,"https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80","Classic ring donut with shiny glaze."],
  ["Chocolate Donut","Donuts",229,"https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80","Chocolate glazed donut with sprinkles."],
  ["Strawberry Donut","Donuts",249,"https://images.unsplash.com/photo-1533910534207-90f31029a72e?auto=format&fit=crop&w=800&q=80","Strawberry icing over a fluffy donut."],
  ["Cinnamon Sugar Donut","Donuts",219,"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80","Warm cinnamon sugar coating."],
  ["Boston Cream Donut","Donuts",279,"https://images.unsplash.com/photo-1579656592043-a20e25a4aa4e?auto=format&fit=crop&w=800&q=80","Filled with smooth vanilla cream."],
  ["French Baguette","Bread",299,"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80","Crusty outside, airy center and baked fresh."],
  ["Brown Bread","Bread",249,"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80","Soft whole-wheat loaf for everyday meals."],
  ["Garlic Bread","Bread",399,"https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=800&q=80","Buttery garlic bread with herbs."],
  ["Milk Bread","Bread",279,"https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=800&q=80","Soft, fluffy loaf with a lightly sweet taste."],
  ["Multigrain Loaf","Bread",329,"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80","Wholesome grains baked into a hearty loaf."],
  ["Chocolate Chip Cookies","Cookies",449,"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80","Crunchy edges with melty chocolate chips."],
  ["Butter Cookies","Cookies",399,"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80","Classic buttery cookies in a fresh batch."],
  ["Double Chocolate Cookies","Cookies",499,"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80","Deep cocoa cookies loaded with chocolate."],
  ["Oatmeal Raisin Cookies","Cookies",429,"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=80","Chewy oats with sweet raisins."],
  ["Almond Cookies","Cookies",469,"https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80","Crunchy almond cookies with roasted notes."],
  ["Butter Croissant","Pastries",349,"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80","Flaky, buttery and baked until golden."],
  ["Chocolate Croissant","Pastries",399,"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80","Flaky pastry filled with chocolate."],
  ["Cinnamon Roll","Pastries",349,"https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=800&q=80","Warm cinnamon roll with sweet glaze."],
  ["Apple Danish","Pastries",379,"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80","Golden Danish with cinnamon apple filling."],
  ["Blueberry Muffin","Pastries",329,"https://images.unsplash.com/photo-1558303055-ef5f6f4d7087?auto=format&fit=crop&w=800&q=80","Soft muffin packed with blueberry flavor."],
  ["Chocolate Brownie","Pastries",299,"https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80","Fudgy brownie with a rich chocolate center."],
  ["Cheesecake Slice","Pastries",449,"https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80","Creamy cheesecake with a buttery base."],
  ["Cappuccino","Drinks",349,"https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80","Espresso with steamed milk and foam."],
  ["Cafe Latte","Drinks",369,"https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80","Smooth espresso with creamy steamed milk."],
  ["Cold Coffee","Drinks",399,"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80","Chilled coffee with a creamy finish."],
  ["Hot Chocolate","Drinks",399,"hot-chocolate.jpg","Velvety chocolate drink with whipped cream."],
  ["Iced Mocha","Drinks",429,"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80","Iced espresso blended with chocolate."],
  ["Club Sandwich","Sandwiches",649,"https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80","Toasted layers with chicken, cheese and salad."],
  ["Chicken Sandwich","Sandwiches",549,"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80","Tender chicken with fresh vegetables."],
  ["Grilled Cheese Sandwich","Sandwiches",449,"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80","Golden toasted bread with melted cheese."],
  ["Chicken Croissant","Sandwiches",599,"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80","Flaky croissant with creamy chicken filling."],
  ["Veggie Sandwich","Sandwiches",429,"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80","Crunchy vegetables, cheese and fresh bread."]
];

let cart = [];
let currentCategory = "All";

const $ = (id) => document.getElementById(id);

function money(n) {
  return n.toLocaleString("en-PK");
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

const defaultReviews = [
  { name: "Ayesha", rating: 5, text: "The chocolate cake was fresh, soft and perfectly sweet. Loved it!", date: "Today" },
  { name: "Ahmed", rating: 5, text: "Fast service and the croissants tasted amazing. Will order again.", date: "Yesterday" },
  { name: "Mahnoor", rating: 4, text: "Beautiful packaging and really good cupcakes. The Oreo one was my favourite.", date: "2 days ago" },
  { name: "Hadi", rating: 5, text: "The donuts were fresh and the offer made the box a great deal.", date: "3 days ago" }
];

let reviews = JSON.parse(localStorage.getItem("sweetcrumbsReviews") || "null") || defaultReviews;
let loyaltyPoints = Number(localStorage.getItem("sweetcrumbsPoints") || 0);
let selectedRating = 5;

function renderLoyalty() {
  const points = loyaltyPoints;
  const rewardValue = Math.floor(points / 100) * 100;
  const progress = points % 100;
  $("loyaltyPoints").textContent = points;
  $("loyaltyReward").textContent = rewardValue;
  $("loyaltyProgress").style.width = `${progress}%`;
  $("pointsToReward").textContent = progress === 0 ? 100 : 100 - progress;
}

function renderReviews() {
  const list = $("reviewsList");
  const total = reviews.length;
  const avg = total ? reviews.reduce((s, r) => s + r.rating, 0) / total : 0;
  $("reviewCount").textContent = total;
  $("averageRating").textContent = avg.toFixed(1);
  $("starsSummary").textContent = "★★★★★";
  list.innerHTML = reviews.map(r => `
    <article class="review-card">
      <div class="review-head"><div class="review-avatar">${r.name.charAt(0).toUpperCase()}</div><div><strong>${r.name}</strong><small>${r.date}</small></div><span class="review-stars">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</span></div>
      <p>${r.text}</p>
    </article>
  `).join("");
}

function copyCode(code) {
  navigator.clipboard?.writeText(code).then(() => showToast(`${code} copied!`)).catch(() => showToast(`Offer code: ${code}`));
}

function renderProducts() {
  const query = $("search").value.trim().toLowerCase();
  const grid = $("productsGrid");

  const filtered = products.filter(p => {
    const categoryMatch = currentCategory === "All" || p[1] === currentCategory;
    const searchMatch = p[0].toLowerCase().includes(query) || p[1].toLowerCase().includes(query);
    return categoryMatch && searchMatch;
  });

  $("resultCount").textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;

  if (!filtered.length) {
    grid.innerHTML = `<div class="no-results"><h3>No products found</h3><p>Try another search or choose a different category.</p></div>`;
    return;
  }

  grid.innerHTML = filtered.map((p, i) => `
    <article class="product">
      <img class="product-img" src="${p[3]}" alt="${p[0]}" loading="lazy">
      <div class="product-info">
        <small>${p[1]}</small>
        <h3>${p[0]}</h3>
        <p>${p[4]}</p>
        <div class="product-bottom">
          <span class="price">Rs. ${money(p[2])}</span>
          <button class="add" type="button" onclick="addToCart(${products.indexOf(p)})">Add +</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(index) {
  const p = products[index];
  const found = cart.find(item => item.index === index);

  if (found) found.qty++;
  else cart.push({ index, qty: 1 });

  renderCart();
  showToast(`${p[0]} added to cart`);
}

function changeQty(index, amount) {
  const item = cart.find(x => x.index === index);
  if (!item) return;

  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(x => x.index !== index);

  renderCart();
}

function renderCart() {
  const box = $("cartItems");

  if (!cart.length) {
    box.innerHTML = `<div class="empty-cart"><div style="font-size:48px">🛒</div><h3>Your cart is empty</h3><p>Add some delicious treats.</p></div>`;
  } else {
    box.innerHTML = cart.map(item => {
      const p = products[item.index];
      return `
        <div class="cart-item">
          <img src="${p[3]}" alt="${p[0]}">
          <div>
            <h4>${p[0]}</h4>
            <p>Rs. ${money(p[2])} × ${item.qty}</p>
            <div class="qty">
              <button type="button" onclick="changeQty(${item.index}, -1)">−</button>
              <strong>${item.qty}</strong>
              <button type="button" onclick="changeQty(${item.index}, 1)">+</button>
            </div>
            <button class="remove" type="button" onclick="removeItem(${item.index})">Remove</button>
          </div>
          <strong>Rs. ${money(p[2] * item.qty)}</strong>
        </div>
      `;
    }).join("");
  }

  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + products[item.index][2] * item.qty, 0);

  $("cartCount").textContent = count;
  $("cartTotal").textContent = money(total);
}

function removeItem(index) {
  cart = cart.filter(item => item.index !== index);
  renderCart();
  showToast("Item removed");
}

function openCart() {
  $("cartDrawer").classList.add("open");
  $("overlay").classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeCart() {
  $("cartDrawer").classList.remove("open");
  $("overlay").classList.remove("show");
  document.body.classList.remove("no-scroll");
}

function openCheckout() {
  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }
  closeCart();
  $("checkoutModal").classList.add("show");
  $("overlay").classList.add("show");
  document.body.classList.add("no-scroll");
}

function closeCheckout() {
  $("checkoutModal").classList.remove("show");
  $("overlay").classList.remove("show");
  document.body.classList.remove("no-scroll");
}

$("search").addEventListener("input", renderProducts);

document.querySelectorAll(".categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    document.querySelectorAll(".categories button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts();
    document.querySelector("#products").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

$("cartBtn").addEventListener("click", openCart);
$("closeCart").addEventListener("click", closeCart);
$("checkoutBtn").addEventListener("click", openCheckout);
$("closeModal").addEventListener("click", closeCheckout);

$("overlay").addEventListener("click", () => {
  closeCart();
  closeCheckout();
});

document.querySelectorAll(".copy-offer").forEach(btn => {
  btn.addEventListener("click", () => copyCode(btn.dataset.code));
});

$("loyaltyRedeem").addEventListener("click", () => {
  if (loyaltyPoints < 100) {
    showToast(`You need ${100 - loyaltyPoints} more points.`);
    return;
  }
  loyaltyPoints -= 100;
  localStorage.setItem("sweetcrumbsPoints", loyaltyPoints);
  renderLoyalty();
  showToast("Rs. 100 loyalty reward redeemed!");
});

$("placeOrder").addEventListener("click", () => {
  const name = $("customerName").value.trim();
  const phone = $("customerPhone").value.trim();
  const address = $("customerAddress").value.trim();

  if (!name || !phone || !address) {
    showToast("Please fill all checkout fields");
    return;
  }

  const orderTotal = cart.reduce((sum, item) => sum + products[item.index][2] * item.qty, 0);
  const earned = Math.floor(orderTotal / 100);
  loyaltyPoints += earned;
  localStorage.setItem("sweetcrumbsPoints", loyaltyPoints);

  cart = [];
  renderCart();
  renderLoyalty();
  closeCheckout();

  $("customerName").value = "";
  $("customerPhone").value = "";
  $("customerAddress").value = "";

  showToast(`Thanks ${name}! Order placed +${earned} loyalty points.`);
});

$("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  showToast("Message sent successfully!");
});

document.querySelectorAll(".star-picker button").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedRating = Number(btn.dataset.rating);
    document.querySelectorAll(".star-picker button").forEach(b => b.classList.toggle("selected", Number(b.dataset.rating) <= selectedRating));
  });
});

document.querySelectorAll(".star-picker button").forEach(b => b.classList.toggle("selected", Number(b.dataset.rating) <= selectedRating));

$("reviewForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("reviewName").value.trim();
  const text = $("reviewText").value.trim();
  if (!name || !text) return;
  reviews.unshift({ name, rating: selectedRating, text, date: "Just now" });
  localStorage.setItem("sweetcrumbsReviews", JSON.stringify(reviews));
  renderReviews();
  e.target.reset();
  selectedRating = 5;
  document.querySelectorAll(".star-picker button").forEach(b => b.classList.toggle("selected", Number(b.dataset.rating) <= 5));
  showToast("Thanks! Your review was posted.");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeCart();
    closeCheckout();
  }
});

renderProducts();
renderCart();
renderLoyalty();
renderReviews();
