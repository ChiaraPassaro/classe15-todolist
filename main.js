// Creare una To do List.
// On click su un item verrà cancellata la riga.
// Una volta che l’item è nascosto, far comparire un modal:
// “Item Cancellato”
// e farlo scomparire subito dopo.

$(document).ready(function () {

  $('li .delete').click(function() {
    $(this).parent().slideUp('slow', showModal);
  });

});

function showModal () {
  console.log('scomparso li');
  $('#modal').addClass('active');
  console.log('avvio setTimeout');
  setTimeout(hideModal, 3000);
}

function hideModal() {
  $('#modal').removeClass('active');
  console.log('fine setTimeout');
}
