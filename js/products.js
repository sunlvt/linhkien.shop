$(document).ready(function () {


  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }
  // add products to localstorage
  const addBtn = $('.addCart');
  let items = [];

  for (let i = 0; i < addBtn.length; i++) {

    $(addBtn[i]).click(function (e) {
      if (typeof (Storage) !== 'undefined') {
        let item = {
          id: i + 1,
          name: $(addBtn[i]).parents('.card-body').children('.card-title').text(),
          info: $(addBtn[i]).parents('.card-body').children('.card-text').html().replace(/\s/g, ''),
          price: $(addBtn[i]).parents('.card-body').children('.product_price').text().replace(/[^0-9]/gi, ''),
          img: $(addBtn[i]).parents('.row').children('div').children('img').attr('src'),
          no: 1
        }
        if (JSON.parse(localStorage.getItem('items')) === null) {
          items.push(item);
          localStorage.setItem('items', JSON.stringify(items));
          window.location.reload();
        }
        else {
          const localItems = JSON.parse(localStorage.getItem('items'));
          localItems.map(data => {
            if (item.id == data.id) {
              item.no = data.no + 1;
            }
            else items.push(data)
          });
          items.push(item);
          localStorage.setItem('items', JSON.stringify(items));
          window.location.reload();
        }
      }
      else { console.log("Your browser doesn't support LocalStoage") }
    });
  }
});