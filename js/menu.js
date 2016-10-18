var mn = $(".main-nav");
mns = "main-nav-scrolled";
mnus = "main-nav-unscrolled";
hdr = $('header').height();
console.log(hdr);

$("body").css('padding-top', hdr);

$(window).scroll(function() {
    if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});


// Setting the navs position
window.onload = function(event) {
    hdr = $('header').height();
    $("body").css('padding-top', hdr)
}


window.onresize = function(event) {
    hdr = $('header').height();
    $("body").css('padding-top', hdr)
};


//Smooth Scrolling
$(document).ready(function() {
    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({
                        scrollTop: targetOffset
                    }, 1000);
                return false;
            }
        }
    });
});


//Form Validation
var errMsg = $('#errorMessage');

function validateForm() {
    var x = document.forms["contactForm"]["firstName"].value;
    if (x == null || x == "") {
        $('#formFirstName').removeClass('has-success');
        $('#formFirstName').addClass('has-danger');
        errMsg.css('visibility', 'visible');
        errMsg.html('Bitte geben Sie einen Vornamen ein!');
        return false;
    } else {
        $('#formFirstName').addClass('has-success');
        $('#formFirstName').removeClass('has-danger');
        errMsg.css('visibility', 'hidden');
    };

    var x = document.forms["contactForm"]["lastName"].value;
    if (x == null || x == "") {
        $('#formLastName').removeClass('has-success');
        $('#formLastName').addClass('has-danger');
        errMsg.css('visibility', 'visible');
        errMsg.html('Bitte geben Sie einen Nachnamen ein!');
        return false;
    } else {
        $('#formLastName').addClass('has-success');
        $('#formLastName').removeClass('has-danger');
        errMsg.css('visibility', 'hidden');
    };

    var email = document.forms["contactForm"]["email"].value;
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!filter.test(email)) {
        $('#formMail').removeClass('has-success');
        $('#formMail').addClass('has-danger');
        errMsg.css('visibility', 'visible');
        errMsg.html('Bitte geben Sie eine gültige E-mail Adresse an!');
        return false;
    } else {
        $('#formMail').addClass('has-success');
        $('#formMail').removeClass('has-danger');
        errMsg.css('visibility', 'hidden');
    };

    var x = document.forms["contactForm"]["lastName"].value;
    if (x == null || x == "") {
        $('#formLastName').removeClass('has-success');
        $('#formLastName').addClass('has-danger');
        errMsg.css('visibility', 'visible');
        errMsg.html('Bitte geben Sie einen Nachnamen ein!');
        return false;
    } else {
        $('#formLastName').addClass('has-success');
        $('#formLastName').removeClass('has-danger');
        errMsg.css('visibility', 'hidden');
    };

    var x = document.forms["contactForm"]["message"].value;
    if (x == null || x == "") {
        $('#formMessage').removeClass('has-success');
        $('#formMessage').addClass('has-danger');
        errMsg.css('visibility', 'visible');
        errMsg.html('Bitte senden Sie uns eine Nachricht!');
        return false;
    } else {
        $('#formMessage').addClass('has-success');
        $('#formMessage').removeClass('has-danger');
        errMsg.css('visibility', 'hidden');
    };

    return true;
}
