
    // load header when have id header
    $("#header").load("../assets/share/headernav.html");
    // load header when have id footer
    $("#footer").load("../assets/share/footer.html");
    $('#checkout').click(function (e) {
        e.preventDefault();

        window.location.href = '../html/checkout.html'
    });
    $('#backShop').click(function (e) {
        e.preventDefault();
        history.back();
    });
    process();
$('.applyCoupon').click(function () {
    localStorage.setItem('coupon',$('.coupon').val())
    $('.giam').text("0đ");
})
    
$(document).ready(function () {    
});


// xóa hàng
function lsdel(storage_name, index) {
    var ls_data = JSON.parse(localStorage.getItem(storage_name));
    if (index == -1) {
    } else {
        ls_data.splice(index, 1);
        localStorage.setItem(storage_name, JSON.stringify(ls_data));
        process();
    }

};

//thêm hàng
function process() {
    let storageList = JSON.parse(window.localStorage.getItem('items'));
    let str = "";
    let total = 0;
    internationalNumberFormat = new Intl.NumberFormat('en-US')
    if (storageList.length == 0) {
        str += '<tr><td>Nothing here</td></tr>';
    }
     else {
         for (var i = 0, len = storageList.length; i < len; i++) {
             let gia = parseInt(storageList[i].price);
             let totalEach = gia * (storageList[i].no);
             total += totalEach;
             str += '<tr>';
             str += '<td>';
             str += '<figure class="itemside ">'
             str += '<img src="' + storageList[i].img + '" class="imgHolder">'
             str += '<figcaption> <a href="#" class="info text-dark text-justify"><b>' + storageList[i].name + '</b></a>';
             str += ' <p class=" moreInfo small ">' + storageList[i].info + '</p>'
             str += ' </figcaption>'
             str += '</figure>'
             str += ' </td >'
             str += '<td>'
             str += '<h4 class="ms-4">' + storageList[i].no + '</h4>'
             str += ' </td>'
             str += '<td>'
             str += '<div class="priceWrap">' + internationalNumberFormat.format(totalEach).toString() + 'đ</div>'
             str += '</td>'
             str += '<td><button onclick="lsdel(\'items\',\'' + i + '\');" class="xoa btn btn-outline-danger p-1">Remove</button></td>';
             str += '</tr > '
         }
         
         
      
     }

     $('.total, .total-last').html(total);
     $('.product-holder').html(str);
}

