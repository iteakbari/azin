


//  custome selectbox and dropdown           /////////////
$(document).on('click', function (e) {
    if ($(e.target).hasClass('select-box-btn') ||  $(e.target).is('.select-box-btn span') || $(e.target).is('.select-box')) {
        let selectBoxUl = $(e.target).closest('.select-box').find('.select-box-ul');
        if (!$(selectBoxUl).hasClass('show')) {
            $('.select-box-ul').removeClass('show');
            $(selectBoxUl).addClass('show');
            console.log($(e.target));

        } else {
            $(selectBoxUl).removeClass('show');
        }
    }else if($(e.target).is('.searchAddress input')){
        $(e.target).prop('readonly',false);
    }else if($(e.target).is('.plus') || $(e.target).is('.delete-item') || $(e.target).is('.minus')){
        console.log('ok');
    } else {
        $('.select-box-ul').removeClass('show');
        // console.log($(e.target));
    }
});

$('.select-item').on('click', function () {
    $(this).closest('.select-box').find('.select-box-btn span').text($(this).text());
    // $('.select-box-btn span').text($(this).text());
    $('.selectedAddress').text($('.select-box-btn span').text());
    $(this).closest('.address-sec .select-box').find('.select-box-btn span').addClass('e-font');
    $(this).closest('.compare-box-item').find('.details').show();
    $(this).closest('.compare-box-item').find('.addToCompareImg').hide();
});
$('.selectedAddress').text($('.select-box-btn span').text());

$('').on('click', function (e) {
    $('.select-box-ul').addClass('show');
    console.log(e.target);
})
// ////////////////////////////////////////////


// search overlay          ///////////////////
$(document).on('click', function (e) {
    if ($(e.target).is('.search-icon')) {
        $('.search-icon').css('right', '-50px');
        $('.search-overlay').addClass('on');
        $('.navbar').addClass('m-fadeOut');
        $('.search-overlay-item').addClass('on');
        $('.search-overlay-item input').focus();
        $('.most-search').show('slow');
    } else if ($(e.target).is('.close-overlay')) {
        if ($('.search-overlay-item input').val()) {
            $('.search-overlay-item input').val('');
        } else {
            $('.search-icon').css('right', '0');
            $('.search-overlay').removeClass('on');
            $('.navbar').removeClass('m-fadeOut');
            $('.search-overlay-item').removeClass('on');
            $('.most-search').hide();
        }
    }
});
// /////////////////////////////////

  
$(document).on('click', function(e){
    if($(e.target).parents(".filter-div").length){
        $(e.target).parents(".filter-div").addClass('show');
    }
})
