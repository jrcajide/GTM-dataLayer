/* dataLayer creado dinámicamente gtm.dom */

<script>

//Check if dataLayer exists or build dataLayer
dataLayer = (typeof dataLayer !== 'undefined') ? dataLayer : [];

// Build product array
gtm_products = [];

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


/** Build an event send to the Datalayer, which needs to trigger the E-commerce transaction in the GTM backend
* Additional datalayer items are send to the datalayer and processed by the GTM as an transaction
*/
dataLayer.push({
	'event': 'trackTrans',
	'transactionId': '000111',          // Transaction ID - Required
	'transactionAffiliation': '',           // Affiliate / Shop name - Optional
	'transactionTotal': 110.00,         // Total order value including VAT - As decimal seperator a . (dot) should be used - Required       
	'transactionTax': 10.00,            // VAT value - As decimal seperator a . (dot) should be used - Required

	'transactionShipping': 3.95,            // Shipping cost - As decimal seperator a . (dot) should be used - Required
	'transactionPaymentType': 'iDEAL',      // Choice of payment type - iDEAL / Creditcard
	'transactionCurrency': 'EUR',           // Currency code - use the proper supported currency code
	'transactionPromoCode': '',         // Promotional code
	'transactionProducts': gtm_products                 
}); 

</script>
