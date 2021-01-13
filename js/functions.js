$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
});

$(document).ready(function() {
    console.log('te')
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('span.btn-topo').fadeIn(200);
        } else {
            $('span.btn-topo').fadeOut(200);
        }
    });
    $('span.btn-topo').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    })

    $('.btn-enviar').click(function(){
        var nome = $('#nome').val()
        var email = $('#email').val()
        var msg =  $('#mensagem').val()
        if(nome == ""){$('.error-name').show()}else{$('.error-name').hide()}
        if(email == ""){$('.error-mail').show()}else{$('.error-mail').hide()}
        if(msg == ""){$('.error-msg').show()}else{$('.error-msg').hide()}
        if(nome.length > 0 && email.length > 0 && msg.length > 0){
            if(msg.length > 10){
                $('.sucess-msg').show();
            }else{
                $('.error-msg').show()
            }
        }
    })
})