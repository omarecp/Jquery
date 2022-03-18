$('h1').click(function(){
  $(this).text("i was changed!")
})

$('li').click(function(){
  console.log('any li was clicked!')
})

//key Press
// $('input').eq(0).keypress(function(event){
//   //$('h3').toggleClass('turnBlue');
//   if(event.which === 13){
//     $('h3').toggleClass('turnBlue');
//   }
// })

//on
// $('h1').on('dblclick',function(){
//   $(this).toggleClass('turnBlue');
// })

$('input').eq(1).on('click',function(){
  $('.container').fadeOut(3000);
})
