/* dataLayer creado dinámicamente gtm.dom */

<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

// Build product array
gtm_products = [];

dataLayer.push({
	'ecommerce': {
		'currencyCode': 'EUR',                       // Local currency is optional.
		'impressions': gtm_products
	}
});

gtm_products.push({
	'name': 'Producto 1',       // Name or ID is required.
	'id': '12345',
	'price': '15.25',
	'brand': 'Google',
	'category': 'Apparel',
	'variant': 'Gray',
	'list': 'Search Results',
	'position': 1            
});

gtm_products.push({
	'name': 'Producto 2',       // Name or ID is required.
	'id': '12345',
	'price': '15.25',
	'brand': 'Google',
	'category': 'Apparel',
	'variant': 'Gray',
	'list': 'Search Results',
	'position': 1
});



</script>
