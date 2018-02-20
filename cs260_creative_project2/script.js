$(document).ready(function() {
  //searching an author's name
  $("#authorSubmit").click(function(e) {
    e.preventDefault();
    console.log("Pressed submit button for an author");
    var input = $("#authorInput").val();
    console.log(input);
    var myurl = "http://openlibrary.org/search.json?author=" + input;
    $.ajax({
      url : myurl,
      success : function(json){
        //console.log(json);
        var results = "";
        results += '<h2>Results:</h2>';
        json = JSON.parse(json);
        var array = json.docs;
        for(var i=0; i<array.length; i++){
          //get information about each result
          var title = json.docs[i].title;
          var author = json.docs[i].author_name;
          var cover_id = json.docs[i].cover_i;
          results += '<h3>' + title + '</h3>';
          results += '<p>Author: ' + author + '</p>';
          results += '<img src="http://covers.openlibrary.org/b/id/' + cover_id + '-M.jpg"/>';
        }
        $('#authorsResults').html(results);
      }
    })
  });

  //searching a book title
  $("#titleSubmit").click(function(e){
    e.preventDefault();
    //console.log("Pressed submit button for a title");
    var input = $("#titleInput").val();
    var myurl = "http://openlibrary.org/search.json?title=" + input;
    $.ajax({
      url : myurl,
      success : function(json){
        //console.log(json);
        var results = "";
        results += "<h2>Results</h2>";
        json = JSON.parse(json);
        var array = json.docs;
        for(var i=0; i < array.length; i++){
          //get information about each result
          var title = json.docs[i].title;
          var author = json.docs[i].author_name;
          var cover_id = json.docs[i].cover_i;
          var cover_id = json.docs[i].cover_i;
          results += '<h3>' + title + '</h3>';
          results += '<p>Author: ' + author + '</p>';
          results += '<img src="http://covers.openlibrary.org/b/id/' + cover_id + '-M.jpg"/>';
        }
          $('#booksResults').html(results);
      }
    });
  });
});
