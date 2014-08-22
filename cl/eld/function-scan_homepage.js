$( document ).ready(function() {
    
    var newsList =$('.md-news-main');
    $.each( newsList, function(index, item){
        
       var titulo = $( this ).find('h2.headline').text();
       
        var autorList = $( this ).find('small.byline a');
        
        if (autorList != 'undefined') {
            var autor = [];

            $.each( autorList, function(index, item){
                var autorname = $( this ).text();
                autor.push($.trim(autorname) );
      
             });
               
        }
           
            console.log( $.trim(titulo) );
        var str = autor.toString();
        console.log( str);

   
    });
});