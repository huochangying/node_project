/**
 * Created by quauq on 2017/4/21.
 */
$(function () {
    var signUpNow = $('#signUpNow');
    var signUp = $('#signUp');
    var register = $('.register');
    var login = $('.login');
    var container = $('.container');
    signUpNow.click(function () {
        register.show();
        login.hide();
        container.addClass('registerHeight');
    });
    signUp.click(function () {
        login.show();
        register.hide();
        container.removeClass('registerHeight');
        $.ajax({
            type: 'POST',
            url: '/api/user/register',
            cache: true,
            data: {
                username: $('input[name="Name"]').val(),
                password: $('input[name="password"]').val(),
                rePassword: $('input[name="rePassword"]').val(),
                Email: $('input[name="Email"]').val()
            },
            dataType: 'json',
            success: function (data) {
                console.log(data)
            }
        })

    })
});