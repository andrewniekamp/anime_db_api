
$(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

    var input = $('#user-input').val();

    $.get("http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~" + input,
    output = function(response) {

      // console.log(response.getElementsByTagName("anime")[0]);
      // console.log(response.getElementsByTagName("anime"));

      var anime = response.getElementsByTagName("anime"); //outputs array of anime

      for (var index = 0; index  < anime.length; index++) {
        $('#output').append("<h3>" + anime[index].getAttribute("name") + "</h3>");

          var info = anime[index].getElementsByTagName("info")[0];
          var infoType = info.getAttribute("src");
          $('#output').append("<img src=' " + infoType + "' />");

        }

      // var x = response.getElementsByTagName("anime")[0];
      // var txt = x.getAttribute("name");
      // $('#output').text(txt).append(infoType);
      //
      // var info = response.getElementsByTagName("info")[0];
      // var infoType = info.getAttribute("src");
      //
      // $('#image').html("<img src=' " + infoType + "' />");
    });
  });
});
