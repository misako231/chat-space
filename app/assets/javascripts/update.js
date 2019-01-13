$(function() {
  function buildHTML(message) {
    var sendImage = '';
    var sendContent='';
    if (message.image.url) {
      sendImage = `<img src="${message.image.url}" class="lower-message__image">`;
    }
    if (message.content) {
      sendContent = `<p class="lower-message__content">
                      ${message.content}
                    </p>`
    }

    var html =`<div class="message" data-message-id="${message.id}">
                <div class="upper-message">
                  <div class="upper-message__user">
                    ${message.name}
                  </div>
                  <div class="upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="lower-message">
                    ${sendImage}
                    ${sendContent}
                </div>
              </div>`
    return html
  }

  function update() {
    $.ajax({
      type: 'GET',
      url: location.href,
      dataType: 'json'
    })
    .done(function(messages) {
     var id = $('.message').data('message-id');
      messages.forEach(function(message) {
        if (message.id > id) {
          $('.main__messages').append(buildHTML(message));
        }
      });
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  }

  $(function() {
    setInterval(update, 5000);
  });
});
