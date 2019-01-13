$(function() {

  function update() {
    $.ajax({
      type: 'GET',
      url: location.href,
      dataType: 'json'
    })
    .done(function(messages) {

    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  }

  $(function() {
    setInterval(update, 5000);
  });
});
