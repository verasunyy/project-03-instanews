$('#section-select').on('change', function () {
    $(".loading").show();
    const section = $(this).val();
    $(".stories").html("");
    if (section !== '') {
        // console.log(selected);
        loadStories(section);
        // $(".nyt-logo") change logo size
    }
});
function loadStories(section) {
    $.ajax({
        method: 'get',
        url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=81xlA4cYvKGRAH8yiQiiE2CuHr82DZDM`
    })
        .done(function (data) {
            // console.log(data);
            // $(".stories").html("");
            $.each(data.results, function (index, value) {
                // console.log(index);
                if (index < 16) {
                    let imageUrl = value.multimedia[4].url;
                    let storyAbstract = value.abstract;
                    // console.log(storyAbstract);
                    // console.log(imageUrl);
                    $(".stories").append(`<div class="story" style="background-image: url(${imageUrl})"><div class="abstract">${storyAbstract}</div></div>`)
                }
            })
        })
        .fail(function () {
            $(".stories").append('Sorry there was an error.');
        })
        .always(function () {
            $(".loading").hide();
        });
}
