



// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"

$.ajax({
    "url":"https://www.kimonolabs.com/api/4vxxfyku?apikey=PX3xPB972VaCF6oqN7jFOUM0KhrB7Anq",
    "crossDomain":true,
    "dataType":"jsonp",
    // Make a call to the Kimono API following the "url" 
    
    'success': function(response){ 
    // If the call request was successful and the data was retrieved, this function will create a list displaying the data
        
    //$("h1").html(response.name);
    // Puts the API name into the panel heading  
        
    var collection = response.results.collection1;
    for (var i = 0; i < 10; i++){   
    // Traverses through every  3 elements 

        var randomCollection = collection[Math.floor(Math.random()*collection.length)];
        var photoURL = randomCollection.noun.src;
        // Records the URL of each photo in a variable called "photoURL"

        if (i == 0)
        {
          $('#one').append('<div class="bb-item" style="display: block;"><img src="' + photoURL + '"></div>');
        }
        else 
        {
          $('#one').append('<div class="bb-item" style="display: none;"><img src="' + photoURL + '"></div>');
        }
        // Puts this URL inside an img tag within the #one div
        if (i == 0)
        {
          $('#nav-one').append('<span class="bb-current"></span>');
        }
        else 
        {
          $('#nav-one').append('<span></span>');
        }
    }

    for (var i = 0; i < 10; i++){   
    // Traverses through every  3 elements 

        var randomCollection = collection[Math.floor(Math.random()*collection.length)];
        var photoURL = randomCollection.noun.src;
        // Records the URL of each photo in a variable called "photoURL"

        if (i == 0)
        {
          $('#four').append('<div class="bb-item" style="display: block;"><img src="' + photoURL + '"></div>');
        }
        else 
        {
          $('#four').append('<div class="bb-item" style="display: none;"><img src="' + photoURL + '"></div>');
        }

        
        // Puts this URL inside an img tag within the #one div
        if (i == 0)
        {
          $('#nav-four').append('<span class="bb-current"></span>');
        }
        else 
        {
          $('#nav-four').append('<span></span>');
        }
    }
  }
 
  })

$.ajax({
  "url":"https://www.kimonolabs.com/api/26ka5j26?apikey=PX3xPB972VaCF6oqN7jFOUM0KhrB7Anq",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data
  

  var collection = response.results.collection1;
    for (var i = 0; i < 10; i++){   
    // Traverses through every element in the entire collection 
        var randomCollection = collection[Math.floor(Math.random()*collection.length)];
        var six = randomCollection.words.text;

        $('.words').append(six + '<br>');

        if (i == 0)
        {
          $('#two').append('<div class="bb-item" style="display: block;"><p>' + six + '</p></div>');
        }
        else 
        {
          $('#two').append('<div class="bb-item" style="display: none;"><p>' + six + '</p></div>');
        }

        
        // Puts this URL inside an img tag within the #one div
        if (i == 0)
        {
          $('#nav-two').append('<span class="bb-current"></span>');
        }
        else 
        {
          $('#nav-two').append('<span></span>');
        }
      }

      for (var i = 0; i < 10; i++){   
    // Traverses through every element in the entire collection 
        var randomCollection = collection[Math.floor(Math.random()*collection.length)];
        var six = randomCollection.words.text;

        $('.words').append(six + '<br>');

        if (i == 0)
        {
          $('#three').append('<div class="bb-item" style="display: block;"><p>' + six + '</p></div>');
        }
        else 
        {
          $('#three').append('<div class="bb-item" style="display: none;"><p>' + six + '</p></div>');
        }

        
        // Puts this URL inside an img tag within the #one div
        if (i == 0)
        {
          $('#nav-three').append('<span class="bb-current"></span>');
        }
        else 
        {
          $('#nav-three').append('<span></span>');
        }
      }
  
  }

});

$( document ).ready(function() {
  setTimeout(function(){
      var $grid = $( '#bb-custom-grid' );
      $grid.find( 'div.bb-bookblock' ).each( function( i ) {

      var $bookBlock = $( this ),
      $nav = $bookBlock.next().children( 'span' ),
      bb = $bookBlock.bookblock( {
        speed : 1000,
        shadows : true
      } );

      // add navigation events
      $nav.each( function( i ) {
        $( this ).on( 'click touchstart', function( event ) {
          var $dot = $( this );
          $nav.removeClass( 'bb-current' );
          $dot.addClass( 'bb-current' );
          $bookBlock.bookblock( 'jump', i + 1 );
          return false;
        } );
      } );
      
      // add swipe events
      $bookBlock.children().on( {
        'swipeleft' : function( event ) {
          $bookBlock.bookblock( 'next' );
          return false;
        },
        'swiperight' : function( event ) {
          $bookBlock.bookblock( 'prev' );
          return false;
        }

      } );
                  
    } );

  }, 2000);
    
});

