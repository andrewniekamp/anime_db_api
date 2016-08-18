
$(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

    var input = $('#user-input').val();
    $('#output').text('');

    $.get("http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~" + input,
    output = function(response) {

      var anime = response.getElementsByTagName("anime");
      for (var index = 0; index  < anime.length; index++) {
        var info = anime[index].getElementsByTagName("info")[0];
        var infoType = info.getAttribute("src");
        $('#output').append(
          "<div class='col-xs-4 content'>" +
          "<div class='header'><span class='header-text'>" + anime[index].getAttribute("name") + "</span></div>" +
          "<img class='img-responsive' src=' " + infoType + "' />" +
          "</div>");
      }
    });
  });
});
