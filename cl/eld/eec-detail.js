<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

dataLayer.push({
	'contentgroup1': 'Nacional', //Ediciones regionales
	'contentgroup2': '', //Blog
	'contentgroup3': 'Sociedad', //Sección
	'contentgroup4': 'Sofía Pérez Mendoza', //Autor 
	'dimension2': '2014-08-20', //Fecha de publicación
	'dimension3': '2.5k-3k', //Longitud del post - GTM
	'metric1': 5 //Número de lectores - GTM
});

/*
Sólo si el usuario accede a la noticia desde la Portada
*/

var el = document.createElement('a');
el.href = document.referrer;

if ((typeof(document.referrer) !== 'undefined') && (el.pathname == "/eldiario/")) {

	console.log ('Viene de la portada: ' + el.pathname);
	
	gtm_articulos = [];
	
	gtm_articulos.push({
		'name': 'Las familias pagan el 70% de lo que cuesta la gestión privada de guarderías públicas en Madrid',       
		'id': '290121505',
		'position': 101
	});	
		
	dataLayer.push({
	  'ecommerce': {
		'click': {
		  'actionField': {'list': 'Portada:2014-08-20'},
		  'products': gtm_articulos
		 }
	   }
	});
}


</script>