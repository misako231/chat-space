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
                    ${sendContent}
                    ${sendImage}
                </div>
              </div>`
    return html
  }

  var update = setInterval(function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var message_id = $('.message:last').data('message-id');
      $.ajax({
        type: 'GET',
        url: location.href,
        data: {
          message: { id: message_id }
        },
        dataType: 'json'
      })
      .done(function(messages) {
        messages.forEach(function(message) {
          $('.main__messages').append(buildHTML(message));
        });
      })
      .fail(function(data) {
        alert('自動更新に失敗しました');
      });
    } else {
      clearInterval(update);
    };
  }, 5000);
});

