
$(function() {
  $('#search').submit(function(event) {
    event.preventDefault();

    var input = $('#user-input').val();

    $.get("http://cdn.animenewsnetwork.com/encyclopedia/api.xml?anime=~" + input,
    output = function(response) {
      var x = response.getElementsByTagName("anime")[0];
      var txt = x.getAttribute("name");
      $('#output').text(txt).append(infoType);

      var info = response.getElementsByTagName("info")[0];
      var infoType = info.getAttribute("src");

      $('#image').html("<img src=' " + infoType + "' />");
    });
  });
});
