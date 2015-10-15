function openForm(a) {
  $.ajax({
        method: "GET",
        url: a
    }).done(function( data) {
//        document.getElementById("content").innerHTML = data;
      $('#content').html(data);
    }).fail(function( data) {
        openForm('pages-diego/comum/404.html')
    });
}
