

const productItem = document.getElementById('product-item');

const removeData = function(e)
{
   let  data = localStorage.getItem('cart');
   data = JSON.parse(data);
   let quality =  data.filter((item) => item.name === e.target.previousSibling.innerText);
   data  =  data.filter((item) => item.name !== e.target.previousSibling.innerText);
   const newQuality = localStorage.getItem('quality') - quality[0].quality ;
   localStorage.setItem('quality',newQuality );
   $('.red_circle').text(newQuality);
   localStorage.setItem('cart', JSON.stringify(data));
}

productItem.addEventListener('click', function(e){
   if ( e.target.classList.contains('remove-btn'))
   {
      const productItem = e.target.closest('.product-item');
      removeData(e);
      productItem.remove();
      displaySumPrices();
   }  
});


const displaySumPrices = function()
{
   const sumPrice = function(){
      let prices = [...document.querySelectorAll('.price-box')];
      prices = prices.map(item => parseInt(item.innerText.replace(/\D/g, '')));
      const sumPrice = prices.reduce((a, b) => a + b, 0);
      return sumPrice;
   }
   document.querySelector('.total-amount').innerText = sumPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
   document.querySelector('.final-money').lastElementChild.innerText = sumPrice().toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
displaySumPrices();




