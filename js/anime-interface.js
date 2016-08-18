
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
        var summary = '';
        for (var innerIndex = 0; innerIndex < anime[index].getElementsByTagName("info").length; innerIndex++) {
          if (anime[index].getElementsByTagName("info")[innerIndex].getAttribute("type") === "Plot Summary") {
            summary = anime[index].getElementsByTagName("info")[innerIndex].textContent;
          }
        }
        $('#output').append(
          "<div class='row content'>" +
            "<div class='col-xs-4'>" +
              "<img class='img-responsive' src=' " + infoType + "' />" +
            "</div>" +
            "<div class='col-xs-8'>" +
              "<div class='header'><span class='header-text'>" + anime[index].getAttribute("name") + "</span></div>" +
              "<p>" + summary + "</p>" +
              "</div>" +
          "</div>");
      }
    });
  });
});
