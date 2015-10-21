function openForm(a) {
  $.ajax({
        method: "GET",
        url: a
    }).done(function( data) {
      $('#content').html(data);
    }).fail(function( data) {
        openForm('500.html')
    });
}
