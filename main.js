/*globals $ */
$(document).ready(function () {
    'use strict';
    var testimonial = ['Unbelievable skill in literally any design you can think of . The icing on the cake ( excuse the pun!) is that the cake inside tastes amazing too . Totally guest class in all ways x', 'I’ve had two amazing cakes made by Hannah so far! Both perfect. Love the cakes, love the girl!', 'Hannah very kindly donated 60 of her amazing cupcakes to help us raise money for charity! Amazing and talented! Thank you again honey', 'The peppa pig cake was for my grand daughters 2nd Birthday she absoluty loved it and it tasted yummy Thanks Hannah', 'I\'ve had several cakes made by Hannah they were all fabulous and unique. ..They taste great too!', 'Hannah made me a cake for my nephews 7th birthday, really creative and tasted amazing! Thank you Hannah', 'Made my auntie\'s wedding cake (with all the Purple Hearts) and it was beautiful!'];
    var i = 0;
    var date = new Date();

    $('.testimonial').append('"' + testimonial[i] + '"');
    $('.footer p').append(date.getFullYear());

    function fadeTest() {
        i++;
        $('.testimonial').fadeOut('slow', function () {
            if (i >= testimonial.length) {
                i = 0;
            }
            $(this).html('"' + testimonial[i] + '"').fadeIn('slow');
        });
    }


    setInterval(function () {
        fadeTest();
    }, 4500);
});