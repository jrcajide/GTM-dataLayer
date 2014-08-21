/* dataLayer creado dinámicamente gtm.dom */

<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

dataLayer.push({
	'contentgroup1': '', //Ediciones regionales
	'contentgroup2': '', //Blog
	'contentgroup3': 'Home', //Sección
	'contentgroup4': '', //Autor 
	'dimension1': '', //Fecha de publicación
	'dimension2': '', //Longitud del post - GTM
	'metric1': 5 //Número de lectores - GTM
});

gtm_articulos = [];

dataLayer.push({
	'ecommerce': {
		'impressions': gtm_articulos
	}
});

gtm_articulos.push({
	'name': 'Las familias pagan el 70% de lo que cuesta la gestión privada de guarderías públicas en Madrid',       // Name or ID is required.
	'id': '290121505',
	'list': 'Portada:2014-08-20',
	'position': 101
});

gtm_articulos.push({
	'name': 'Kurt Vile, mi villano favorito',       // Name or ID is required.
	'id': '294321157',
	'list': 'Portada:2014-08-20',
	'position': 2
});


</script>
