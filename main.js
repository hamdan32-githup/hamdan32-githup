const products = [
 {id:1,name:"Fresh Apples",price:450,cat:"food",icon:"🍎"},
 {id:2,name:"Organic Milk",price:280,cat:"food",icon:"🥛"},
 {id:3,name:"Fresh Vegetables",price:350,cat:"food",icon:"🥦"},
 {id:4,name:"Pain Relief",price:350,cat:"pharma",icon:"💊"},
 {id:5,name:"Vitamin Pack",price:850,cat:"pharma",icon:"🧴"},
 {id:6,name:"Classic T-Shirt",price:1200,cat:"clothes",icon:"👕"},
 {id:7,name:"Premium Hoodie",price:2800,cat:"clothes",icon:"🧥"},
 {id:8,name:"Sport Sneakers",price:4500,cat:"shoes",icon:"👟"},
 {id:9,name:"Classic Sandals",price:2200,cat:"shoes",icon:"🩴"}
];

let cart=[];

function gs(id){
 const x=document.getElementById(id);
 if(x)x.scrollIntoView({behavior:"smooth"});
}

function renderProducts(cat="all"){
 const grid=document.getElementById("prodGrid");
 if(!grid)return;
 grid.innerHTML="";
 products.filter(p=>cat==="all"||p.cat===cat).forEach(p=>{
  grid.innerHTML+=`
   <div class="prod-card">
    <div class="prod-img"><span>${p.icon}</span>
    <div class="prod-badge">AVAILABLE</div></div>
    <div class="prod-body">
     <div class="prod-name">${p.name}</div>
     <div class="prod-desc">Premium quality product</div>
     <div class="prod-footer">
      <div class="prod-price">Rs ${p.price.toLocaleString()}</div>
      <button class="add-btn" onclick="addToCart(${p.id})">+</button>
     </div>
    </div>
   </div>`;
 });
}

function filterCat(cat){gs("prods");setTimeout(()=>renderProducts(cat),300);}

function setTab(btn,cat){
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active");
 renderProducts(cat);
}

function addToCart(id){
 const p=products.find(x=>x.id===id);
 if(!p)return;
 const item=cart.find(x=>x.id===id);
 item?item.quantity++:cart.push({...p,quantity:1});
 updateCart();
 showToast(`🛒 ${p.name} added to basket`);
}

function updateCart(){
 const box=document.getElementById("cartItems");
 if(!box)return;
 let total=0,count=0;
 box.innerHTML=cart.length?"":"<div class='cart-empty'>🧺 Your basket is empty</div>";

 cart.forEach(p=>{
  let sum=p.price*p.quantity;
  total+=sum;count+=p.quantity;
  box.innerHTML+=`
   <div class="cart-line">
    <div class="cart-line-icon">${p.icon}</div>
    <div class="cart-line-info"><strong>${p.name}</strong>
    <span>Rs ${p.price.toLocaleString()}</span></div>
    <div class="cart-qty">
     <button class="qbtn" onclick="changeQty(${p.id},-1)">−</button>
     <span>${p.quantity}</span>
     <button class="qbtn" onclick="changeQty(${p.id},1)">+</button>
    </div>
    <div class="cart-line-price">Rs ${sum.toLocaleString()}</div>
   </div>`;
 });

 const countEl=document.getElementById("cartCount");
 const totalEl=document.getElementById("cartSubtotal");
 const check=document.getElementById("checkoutBtn");
 if(countEl)countEl.textContent=count;
 if(totalEl)totalEl.textContent=`Rs ${total.toLocaleString()}`;
 if(check)check.disabled=!cart.length;
}

function changeQty(id,n){
 const x=cart.find(p=>p.id===id);
 if(!x)return;
 x.quantity+=n;
 if(x.quantity<=0)cart=cart.filter(p=>p.id!==id);
 updateCart();
}

function openCart(){
 document.getElementById("cartOverlay")?.classList.add("show");
 document.getElementById("cartDrawer")?.classList.add("show");
 updateCart();
}

function closeCart(){
 document.getElementById("cartOverlay")?.classList.remove("show");
 document.getElementById("cartDrawer")?.classList.remove("show");
}

function showModal(id){document.getElementById(id)?.classList.add("show");}
function hideModal(id){document.getElementById(id)?.classList.remove("show");}

function openCheckout(){
 if(!cart.length)return showToast("🧺 Your basket is empty");
 closeCart();showModal("checkoutModal");
}

function reviewOrder(){
 const ids=["coName","coPhone","coCity","coAddress"];
 if(ids.some(id=>!document.getElementById(id)?.value.trim()))
  return showToast("⚠️ Please fill all details");

 let total=cart.reduce((a,p)=>a+p.price*p.quantity,0);
 document.getElementById("reviewReceipt").innerHTML=
  cart.map(p=>`<div class="receipt-row"><span>${p.name} × ${p.quantity}</span>
  <span>Rs ${(p.price*p.quantity).toLocaleString()}</span></div>`).join("")+
  `<div class="receipt-row total"><span>TOTAL</span><span>Rs ${total.toLocaleString()}</span></div>`;

 hideModal("checkoutModal");showModal("reviewModal");
}

function placeOrder(){
 const no="HSS-"+Math.floor(100000+Math.random()*900000);
 document.getElementById("orderNoTxt").textContent=`Order #${no}`;

 let total=cart.reduce((a,p)=>a+p.price*p.quantity,0);
 document.getElementById("confirmReceipt").innerHTML=
  `<div class="receipt-row total"><span>TOTAL</span>
  <span>Rs ${total.toLocaleString()}</span></div>`;

 cart=[];updateCart();
 hideModal("reviewModal");showModal("confirmModal");
}

function copyCode(code){
 navigator.clipboard?.writeText(code);
 showToast(`📋 ${code} copied`);
}

let toastTimer;
function showToast(msg){
 const t=document.getElementById("toast");
 if(!t)return;
 t.textContent=msg;t.classList.add("show");
 clearTimeout(toastTimer);
 toastTimer=setTimeout(()=>t.classList.remove("show"),2500);
}

document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){
  document.querySelectorAll(".modal-bg.show").forEach(x=>x.classList.remove("show"));
  closeCart();
 }
});

document.addEventListener("DOMContentLoaded",()=>{
 renderProducts();
 updateCart();
});