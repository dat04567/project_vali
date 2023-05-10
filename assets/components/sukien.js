import  pkg from '../data/sukien.json' assert { type: 'json' };


const eventsList = document.getElementById('events-list');
const pagination = document.getElementById('page-index');
pagination.innerHTML = pkg.map((value,index) => `<li class="page-item"><a class="page-link" href="sukien.html?page=${index+1}">${index + 1}</a></li>`).join('');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

eventsList.innerHTML = pkg[urlParams.get('page') - 1].map(function(item,index){
      return `<div class="item d-flex" > 
      <div class="item-image">
         <a href="/lug-vn-han-hanh-tai-tro-giai-quan-vot-ra-mat-dien-dan-tennis-tp-thu-duc" class = "w-100">
            <img class="w-100" src="${item.imgUrl}">
         </a>
      </div>
      <div class="ms-5 item-content">
         <a href="/lug-vn-han-hanh-tai-tro-giai-quan-vot-ra-mat-dien-dan-tennis-tp-thu-duc" title="LUG.vn hân hạnh tài trợ giải quần vợt ra mắt diễn đàn tennis TP. Thủ Đức">
            <h2 class="item-content-title">${item['tiltle-content']}</h2>
            <div class="item-content-summary">
             ${item.content}
            </div>
         </a>
      </div> 
   </div>
   `
}).join('');