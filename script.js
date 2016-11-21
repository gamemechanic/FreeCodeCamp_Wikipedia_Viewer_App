$(document).ready(function() {
  var search_term;
  var api_link;
  var link0;
  var link1;
  var link2;
  var link3;
  var link4;
  //showing the discover button when hovering on it
  $("#discover").hover(
    function() {
      $("#discover").html("Discover something new")
    },
    function() {
      $("#discover").html("<span class = \"glyphicon glyphicon-refresh\">")
    });
  //directing the user to a  random wikipedia page when clicking on the discover button
  $("#discover").on("click", function() {
    window.open("https\:\/\/en.wikipedia.org\/wiki\/Special:Random", "_blank");
  });
  //clicking on the search bar and typing the user search term
  $("#submit").click(function() {
    search_term = $("#search_field").val();
    api_link = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search_term + "&limit=5&namespace=0&format=json&callback=?";
    //search wikipedia using the user input 
    $.getJSON(api_link, function(json) {
    //loop through the results
      link0 = (JSON.stringify(json[3][0])).replace(/"/g,"");
      link1 = (JSON.stringify(json[3][1])).replace(/"/g,"");
      link2 = (JSON.stringify(json[3][2])).replace(/"/g,"");
      link3 = (JSON.stringify(json[3][3])).replace(/"/g,"");
      link4 = (JSON.stringify(json[3][4])).replace(/"/g,"");
      for (var i = 0; i < 5; i++) {  
        $("#result"+[i]).html("<button class = \"btn btn-info\"id = \"results"+[i]+"\">"+JSON.stringify(json[1][i]).replace(/"/g,"")+"<br>"+JSON.stringify(json[2][i]).replace(/"/g,"")+"</a></button></div>");
      }
    $("#results0").on("click", function() {
    window.open(link0,"_blank");
     });
      $("#results1").on("click", function() {
    window.open(link1,"_blank");
     });
      $("#results2").on("click", function() {
    window.open(link2,"_blank");
     });
      $("#results3").on("click", function() {
    window.open(link3,"_blank");
     });
      $("#results4").on("click", function() {
    window.open(link4,"_blank");
     });
  });
  });
});
//you must the wikipedia search API could be accessed using the code above but remember the "callback" at the end of the link.