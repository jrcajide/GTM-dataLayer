/* dataLayer creado dinámicamente gtm.dom */

<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

// Build product array
gtm_articulos = [];


dataLayer.push({
	'ecommerce': {
		'impressions': gtm_articulos
	}
});

gtm_articulos.push({
	'name': 'Las familias pagan el 70% de lo que cuesta la gestión privada de guarderías públicas en Madrid',       // Name or ID is required.
	'id': '290121505',
	'brand': 'El Diario',
	'category': 'Actualidad/Sociedad',
	'list': 'Home:2014-08-20',
	'position': 'MASTER UNIT 4/6 (COL LEFT)',
	'dimension1': 'Sofía Pérez Mendoza' //Autor
});


gtm_articulos.push({
	'name': 'Kurt Vile, mi villano favorito',       // Name or ID is required.
	'id': '294321157',
	'brand': 'El Diario',
	'category': 'Cultura/Música',
	'list': 'Home:2014-08-20',
	'position': 'MASTER UNI 4/6 (COL RIGHT)',
	'dimension1': 'Jesús Rocamora' //Autor
});


</script>