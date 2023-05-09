import  pkg from '../data/bestseller.json' assert { type: 'json' };


const productContainer = document.getElementById('products');
productContainer.innerHTML = pkg.map(function(item,index){
      return `<article>
      <a href="productDetails.html?id=${item.id}" class="product-item text-reset">
        <img class = "img-product" src="${item.imgURL}" alt="">
        <p class = "ms-2">${item.name}</p>
        <h3 class = "ms-2">${item.price}</h3>
        <h6 class = "ms-2">${item.sale}</h6>
        <div class="logo d-flex align-items-center ">
          <img src="https://as2.ftcdn.net/v2/jpg/01/25/83/03/1000_F_125830316_m9Grtzjlt2I5Gp4qpDQq5G5BSXR5d9ZF.jpg" alt="">
          <p class = "mb-0">${item.whislist}</p>
        </div>
      </a>
    </article>`
}).join('');

