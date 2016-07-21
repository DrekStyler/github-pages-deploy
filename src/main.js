$(document).ready(function(){
  for (var i = 0; i < 1190; i++) {
  var dot = "<div class='pix'></div>";
  $('.main').append(dot);
};
$('.pix').on('click', function (e) {
  alert('!!!');
});

var color = 'black';

$('.selector').on('click', function (e) {
  color = $(this).css('background-color')


})

});
