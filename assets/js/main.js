console.log("it works");



$(document).ready(function () {
    $('.contsubmit').click(function (event) {

        var name = $('.name').val(), 
            email = $('.email').val(), 
            phone = $('.phone').val(), 
            subject = $('.subject').val(), 
            message = $('.message').val(), 
            status = $('.status');
        
        status.empty();

        if (email.length > 5 && email.include('@') && email.include('.')) {
            status.append('mail is valid');
        } else {
            event.preventDefault();
            status.append('mail not valid<br>');
        }

        if (subject.length >= 2) {
            status.append('subject is valid');
        } else {
            event.preventDefault();
            status.append('subject is not valid<br>');
        }

        if (message.length >= 10) {
            status.append('message is valid');
        } else {
            event.preventDefault();
            status.append('message is not valid<br>');
        }
    })
})