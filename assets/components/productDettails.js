import  pkg from '../data/bestseller.json' assert { type: 'json' };



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('id');
const pos = pkg.findIndex(x => x.id == product);
const slider = document.querySelectorAll('.item img');

const productDiscount = document.querySelectorAll('.product-price-discount span');
const description = document.getElementById('description')
document.querySelector('.product-name').innerHTML = pkg[pos].name
slider.forEach( (item) => item.src =  pkg[pos].imgURL);
productDiscount[0].innerHTML = pkg[pos].price
productDiscount[1].innerHTML = pkg[pos].sale
description.innerHTML = pkg[pos].description


 


$(document).ready(function(){

    $('.red_circle').text(localStorage.getItem('quality') || 0);
    $(".add-to-card").click(function () {
        var quality = parseInt($('.qty').val());
        let obj = {};
        $(".red_circle").animate({
                    opacity: 1
                }, 300, function () {
                    localStorage.setItem("quality",parseInt((localStorage.getItem('quality') || 0)) + quality);
                    $(this).text(parseInt(localStorage.getItem('quality')));
                });
        obj = Object.assign( {}, pkg[pos]);
        obj["quality"] = quality; 
        try {
            let data = JSON.parse(localStorage.getItem('cart'));
            let index = data.findIndex(item => item.id === obj.id);
            if (index !== -1)
                data[index].quality += obj.quality;
            else
                data.push(obj);
            localStorage.setItem('cart', JSON.stringify(data));
        } catch (error) {
            localStorage.setItem('cart', JSON.stringify([]) );
            let data = JSON.parse(localStorage.getItem('cart'));
            data.push(obj);
            localStorage.setItem('cart', JSON.stringify(data));
        }      
     }); 
     
       
});



