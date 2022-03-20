// load header when have id header
$("#header").load("../assets/share/headernav.html");
// load header when have id footer
$("#footer").load("../assets/share/footer.html");

$('.show_hide').click(function (e) { 
    e.preventDefault();
    console.log($('.show_hide').html())
    let show='Xem thêm <span style="color: black;"> <i class="fas fa-chevron-down"></i></span>';
    let hide='Rút gọn <span style="color: black;"> <i class="fas fa-chevron-up"></i></span>';
    if($('.show_hide').html()==='Xem thêm <span style="color: black;"> <i class="fas fa-chevron-down"></i></span>') {$('.show_hide').html(hide);}
    else $('.show_hide').html(show);
});