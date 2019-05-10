//run select tag plug-in
$(function() {
    $('select').selectric();
  });

$('#selector').on('change', function () {
    $(".loading-div").show();
    $("header").addClass("active");
    
    const section = $(this).val();
    $(".stories").html("");
    if (section !== 'section') {
        loadStories(section);
    }
    else{
        $(".loading-div").hide();
        $("header").removeClass("active");
    }
});
function loadStories(section) {
    $.ajax({
        method: 'get',
        url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=81xlA4cYvKGRAH8yiQiiE2CuHr82DZDM`
    })
        .done(function (data) {
            const validData = data.results.filter(item => item.multimedia.length == 5).slice(0, 12);
            $.each(validData, function (index, value) {
                let imageUrl = value.multimedia[4].url;
                let articleUrl = value.url;
                let storyAbstract = value.abstract;
                $(".stories").append(`<a href="${articleUrl}" target=blanck class="story" ><div class="background" style="background-image: url(${imageUrl})"><div class="abstract"><p>${storyAbstract}</p></div></div></a>`)
            })
        })
        .fail(function () {
            $(".stories").append('Sorry there was an error.');
        })
        .always(function () {
            $(".loading-div").hide();
        });
}
