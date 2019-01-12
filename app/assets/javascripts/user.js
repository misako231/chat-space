$(function() {
  function appendUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.id }" data-user-name="${ user.name }">追加</a>
                </div>`
    $('#user-search-result').append(html);
  }

  function appendNoUser(user) {
    var html = `<div class="chat-group-user clearfix">
                  ${ user }
                </div>`
    $('#user-search-result').append(html);
  }

  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      $('#user-search-result').empty();
      if(users.length !== 0) {
        users.forEach(function(user) {
          appendUser(user);
        });
      } else {
        appendNoUser('一致するユーザーはいません');
      }
    })
    .fail(function(users) {
      alert('ユーザー検索に失敗しました');
    })
  });

  $('#user-search-result').on('click', '.user-search-add',function() {
    var userId = $('.user-search-add').data('user-id');
    var userName = $('.user-search-add').data('user-name');
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value='${ userId }'>
                  <p class='chat-group-user__name'>${ userName }</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    $('#chat-group-users').append(html);
    $('#user-search-result').empty();
    $('#user-search-field').val('');
  });

  $('#chat-group-users').on('click', '.user-search-remove', function() {
    $(this).parent().remove();
  });
});
