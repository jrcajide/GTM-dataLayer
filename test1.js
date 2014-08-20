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
			   'name': 'DENTRO',       // Name or ID is required.
			   'id': '12345',
			   'price': '15.25',
			   'brand': 'Google',
			   'category': 'Apparel',
			   'variant': 'Gray',
			   'list': 'Search Results',
			   'position': 1            
            });
        // Optional repeat for each additional product to fill gtm_products array

        gtm_products.push({
		   'name': 'FUERA',       // Name or ID is required.
		   'id': '12345',
		   'price': '15.25',
		   'brand': 'Google',
		   'category': 'Apparel',
		   'variant': 'Gray',
		   'list': 'Search Results',
		   'position': 1
            });
        // Optional repeat for each additional product to fill gtm_products array





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


/*
CLICK DEL PRODUCTO A POSTERIORI
*/

 dataLayer.push({
'ecommerce': {
      'click': {
        'actionField': {'list': 'Portada'},
	 'products': [{
 		'name': 'Ordenadores de hasta 20 años gracias al software libre',       
       		'id': '67890',
		'category': 'Andalucía',
		'list': 'Portada'
         }]
       }
     }
 });

/*
DETALLE DEL PRODUCTO 
*/

dataLayer.push({
  'ecommerce----------------------------------------': {
    'detail': {
 	'actionField': {'list': 'Portada'},
	 'products': [{
 		'name': 'Ordenadores de hasta 20 años gracias al software libre',       
       		'id': '67890',
		'category': 'Andalucía',
		'list': 'Portada'
       }]
     }
   }
});

</script>
