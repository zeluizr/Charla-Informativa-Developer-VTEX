$(document).ready(function() {
  $(".helperComplement").remove();
  const Element = $(".vitrine .shelf > h2");
  const Title = Element.text();
  const Split = Title.split(";");
  const Link = $("<a />")
    .attr("href", Split[1])
    .text(Split[0]);
  Element.html("");
  Element.append(Link);

  $.get(
    "/buscapagina?sl=19ccd66b-b568-43cb-a106-b52f9796f5cd&PS=10&cc=10&sm=1&PageNumber=1&fq=H:1142&tt=Las mejores ofertas",
    function(data) {
      $("#app").append(data);
      $(".helperComplement").remove();
    }
  );
});
