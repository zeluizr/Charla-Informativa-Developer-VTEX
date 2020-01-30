// A $( document ).ready() block.
$(document).ready(function() {
  $(".helperComplement").remove();
  const Element = $(".vitrine .shelf > h2");
  const Title = Element.text();
  const Split = Title.split(";");
  const TitleString = $("<span />").text(Split[0]);
  const Link = $("<a />")
    .attr("href", Split[1])
    .text("More Products >");
  Element.html("");
  Element.append(TitleString);
  Element.append(Link);
  $("");
  // http://tutienda.myvtex.com/
  // buscapagina
  // ID de la vitrina
  // ?sl=481c7748-cdc5-44f0-93c2-6ecf4cccc4ee
  // Cantidad de Items en la vitrina
  // &PS=7
  // Cantidad de ul en el listado de productos
  // &cc=7
  // Cantidad de ul en el listado de productos
  // &sm=0
  // Paginacion
  // &PageNumber=3
  // Puedes agregar Colecciones, Marcas y Categorias
  // &fq=H:138
  $.get(
    "/buscapagina?sl=19ccd66b-b568-43cb-a106-b52f9796f5cd&PS=10&cc=10&sm=0&PageNumber=1&fq=H:1142&tt=Las mejores ofertas",
    function(data) {
      $("#app").append(data);
      $(".helperComplement").remove();
    }
  );
});
