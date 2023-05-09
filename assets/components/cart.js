

const data = JSON.parse(localStorage.getItem('cart'));

const productItem = document.getElementById('product-item');
productItem.innerHTML = data.map(function(item,index){
      return `<div class="product-item pt-3 d-flex justify-content-center mb-4">
      <div class="product-image">
         <div class="img">
            <a href="">
               <img
                  src="${item.imgURL}"
            /></a>
         </div>
      </div>
      <div class="product-info">
         <div class="flex-column-full">
            <div
               class="d-flex justify-content-center align-items-center"
            >
               <a class="product-title text-reset" href="#">
                 ${item.name}</a
               ><span class="remove-btn ms-5 fs-3">✕</span>
            </div>
         </div>
         <div class="d-flex mt-5">
            <div class="d-flex quality-select">
               <button class="quantity-btn btn-minus ">
                  <svg  width="16" height="16" xmlns="http://www.w3.org/2000/svg" >
                     <g data-v-3e8bcd48="">
                        <line
                           data-v-3e8bcd48=""
                           stroke-width="1.5"
                           id="svg_6"
                           y1="8"
                           y2="8"
                           x1="4"
                           x2="12"
                           stroke="#000000"
                           fill="none"
                        ></line>
                     </g>
                  </svg>
               </button>
               <input
                  name="quantity"
                  id="product-1"
                  class="count-product"
                  min="1"
                  max="10"
                  value="${item.quality}"
                  class="quantity-label"
                  readonly
               />
               <button class="quantity-btn btn-plus">
                  <svg
                     data-v-3e8bcd48=""
                     width="16"
                     height="16"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <g data-v-3e8bcd48="">
                        <line
                           data-v-3e8bcd48=""
                           stroke-width="1.5"
                           y2="8"
                           x2="12.9695"
                           y1="8"
                           x1="3.0305"
                           stroke="#000000"
                           fill="none"
                        ></line>
                        <line
                           data-v-3e8bcd48=""
                           stroke-width="1.5"
                           transform="rotate(90, 8, 8)"
                           y2="8"
                           x2="13"
                           y1="8"
                           x1="3"
                           stroke="#000000"
                           fill="none"
                        ></line>
                     </g>
                  </svg>
               </button>
            </div>
            <div class="price-box w-100">
               <span class="fs-5">${item.price}</span>
            </div>
         </div>
      </div>
   </div>`
}).join('');