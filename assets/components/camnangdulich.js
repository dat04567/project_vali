import pkg_details from "../data/chitietcamnang.json" assert { type: "json" };
const camnang = document.getElementById("destination-list");

camnang.innerHTML = pkg_details
   .map(function (item, index) {
      return `<a class="destination-item" data-mdb-toggle="modal" data-mdb-target="#destination-item-${index}">
   <img src="${item.imgUrl}">
   <h3>${item.name}</h3>
</a>
<div class="modal fade" id="destination-item-${index}" tabindex="-1">
   <div class="modal-dialog">
      <div class="modal-content">
         <div class="modal-header">
            <h5 class="modal-title">${item.name}</h5>
            <button type="button" class="btn-close" data-mdb-dismiss="modal"></button>
         </div>
         <div class="modal-body">
            <div class="">              
               <img src="${item.imgUrl}" class="w-100 border border-1 rounded"
                  alt="">
               <p class = "mt-5 fs-5"> ${item.description}
               </p>
            </div>
         </div>
         <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
         </div>
      </div>
   </div>
</div>`;
   }).join("");
