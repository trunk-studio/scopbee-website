$(function() {
  $( '#subscriptionForm' ).submit(function( event ) {
    event.preventDefault();

    var $form = $( this ), url = $form.attr( "action" );

    var postData = {
      email:   $form.find( "input[name='email']" ).val(),
    };

    var posting = $.post( url, postData );

    posting.done(function( data ) {

      $form.find( "input[name='email']" ).val( '' );

      alert( "Your email are subscribe successful" );
    });
  });

  $( "button[type='submit']", '#subscriptionForm').removeAttr('disabled');

});

