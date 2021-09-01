$(function () {
    let article = $('.article-box__article div').first();
    $('#next1').click(function () {
        $(article).not('.last1').hide('fast', function () {
            article = $(article).next('.article-box__article div') ;
            $(article).show('fast');
        });
    });
    $('#prev1').click(function () {
        $(article).not('.first1').hide('fast', function () {
            article = $(article).prev('.article-box__article div') ;
            $(article).show('fast');
        });
    });
});

$(function () {
    let quote = $('.feedback__quote div').first();
    $('#next2').click(function () {
        $(quote).not('.last2').hide('fast', function () {
            quote = $(quote).next('.feedback__quote div');
            $(quote).show('fast');
        });
    });
    $('#prev2').click(function () {
        $(quote).not('.first2').hide('fast', function () {
            quote = $(quote).prev('.feedback__quote div');
            $(quote).show('fast');
        });
    });
});