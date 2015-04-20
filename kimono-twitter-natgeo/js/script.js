// 1) Find your API's unique code.
//    To do this, go to your API's page and copy the string of numbers and letters after "apis/" in the URL
//    Paste this code in line 10 of the below code after "api/" and before the "?"

// 2) Find your username's unique API key.
//    When you are logged into Kimono, click your name at the top right and click "Account".
//    Your API key will appear. Paste this code in line 10 of the below code after "apikey-"

$.ajax({
  "url":"https://www.kimonolabs.com/api/82btljua?apikey=PX3xPB972VaCF6oqN7jFOUM0KhrB7Anq",
  "crossDomain":true,
  "dataType":"jsonp",
  //Make a call to the Kimono API following the "url" 
  
  'success': function(response){ 
  // If the call request was successful and the data was retrieved, this function will create a list displaying the data
  

  var collection = response.results.collection1;
    for (var i = 0; i < collection.length; i++){   
    // Traverses through every element in the entire collection 

      //var photoURL = collection[i].Picture.src;
      //var timeStamp = collection[i].Date.text;
      var t_text = collection[i].tweetText.text;
      var t_stamp = collection[i].tweetTime.text;
      console.log(collection[i]);

      $('.group').append(t_stamp + '<br>' + t_text + '<br><br>');
      //$('.group').append(timeStamp + '<br>' + '<img src="' + photoURL + '">');
        
        // $(".list-group").append('<li class="list-group-item">' + collection[i].property1.text + '</li>');
        // // adds the text and the links from the first property into the list
      }
  
  }

});