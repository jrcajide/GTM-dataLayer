/* dataLayer creado dinámicamente gtm.dom */

<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

// Build product array
gtm_articulos = [];

gtm_articulos.push({
	'name': 'Las familias pagan el 70% de lo que cuesta la gestión privada de guarderías públicas en Madrid',       // Name or ID is required.
	'id': '290121505',
	'brand': 'El Diario',
	'category': 'Actualidad/Sociedad',
	'dimension1': 'Sofía Pérez Mendoza', //Autor
	'dimension2': '2014-08-20', //Fecha de publicación
	'dimension3': '2.5k-3k', //Longitud del post
	'metric1': 5, //Número de lectores         
});


dataLayer.push({
  'ecommerce': {
    'click': {
      'actionField': {'list': 'Home:2014-08-20'},    // 'detail' actions have an optional list property.
      'products': gtm_articulos
     }
   }
});

</script>