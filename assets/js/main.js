console.log("it works");



$(document).ready(function () {
    $('.contsubmit').click(function (event) {
        event.preventDefault();

        var name = $('.contname'), 
            email = $('.contmail'), 
            phone = $('.contnum'), 
            subject = $('.contsubj'), 
            message = $('.message'), 
            status = $('.status');
        
        status.empty();

        if (email.length > 5 && email.include('@') && email.include('.')) {
            status.append('mail is valid');
        } else {
            status.append('<input type="text" class="contsubj" required /><label>not valid</label>');
        }

        if (subject.length >= 2) {
            status.append('subject is valid');
        } else {
            status.append('subject is not valid');
        }

        if (message.length >= 20) {
            status.append('message is valid');
        } else {
            status.append('message is not valid');
        }
    })
})