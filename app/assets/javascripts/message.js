$(function() {
  function buildHTML(message) {
    var newContent = '';
      if (message.content) {
       newContent = `<p class="lower-message__content">${ message.content }</p>`;
      }
    var newImage = '';
      if (message.image) {
        newImage = `<img class="lower-message__image" src="${ message.image }">`;
      }
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user">
                      ${ message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${ message.created_at }
                    </div>
                  </div>
                  <div class="lower-message">
                    ${ newContent }
                    ${ newImage }
                  </div>
                </div>`
    return html;
  }

  $(document).on('turbolinks:load', function() {
    $('.new_message').on('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data) {
        var html = buildHTML(data);
        $('.main__messages').append(html);
        $('.main__messages').animate({ scrollTop: $('.main__messages')[0].scrollHeight});
        $('.send').prop('disabled', false);
        $('.new_message')[0].reset();
      })
      .fail(function(data) {
        alert('error');
        $('.send').prop('disabled', false);
      })
    });
  });
});
