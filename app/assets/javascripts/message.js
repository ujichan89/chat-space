$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html = `<div class="message" data-message-id=${message.id}>
        <div class="main-message__box">
          <div class="main-message__box__ab">
            <div class="a">
              ${message.user_name}
            </div>
            <div class="c">
              ${message.created_at}
            </div>
            <div class="b">
              <p class="lower-message__content">
                ${message.content}
              </p>
            <img src=${message.image}>
            </div>
          </div>
        </div>
      </div>`
    } else {
      var html =`<div class="message" data-message-id=${message.id}>
        <div class="main-message__box">
          <div class="main-message__box__ab">
            <div class="a">
            ${message.user_name}
            </div>
            <div class="c">
            ${message.created_at}
            </div>
            <div class="b">
            <p class="lower-message__content">
            ${message.content}
            </p>
            </div>
          </div>
        </div>
      </div>`
    };
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-message').append(html);
      $('.main-message').animate({scrollTop: $('.main-message')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
});