var $form = $('form');

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var values = $form.serializeObject();

  for (var i in values) {
    if (values[i] === '') {
      $(`[name="${i}"]`).css('border-color', 'red');
      return false;
    }
  }

  var jqxhr = $.ajax({
    url: 'https://hooks.zapier.com/hooks/catch/2970859/zfhnod/',
    method: "POST",
    dataType: "json",
    data: values
  }).done(function(data) {
    $('form').html('<div class="success">Thanks, speak soon.</div>');
    gtag('event', 'date-application', {
      'event_category': 'apply',
      'event_label': 'form',
      'value': 1
    });
  })
});

$('input, textarea').keyup(function(e) {
  $(e.target).css('border-color', '#f5f5f5');
})

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('.slide.form').css('display', 'flex')

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 300);
});
