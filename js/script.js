$('#selector').on('change', function () {
    $(".loading-div").show();
    $("header").addClass("active");
    // $(".logo-div").addClass("active");
    // $(".selector-div").addClass("active");

    const section = $(this).val();
    $(".stories").html("");
    if (section !== '') {
        loadStories(section);
    }
});
function loadStories(section) {
    $.ajax({
        method: 'get',
        url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=81xlA4cYvKGRAH8yiQiiE2CuHr82DZDM`
    })
        .done(function (data) {
            console.log(data);
            // $(".stories").html("");
            const validData = data.results.filter(item=> item.multimedia.length==5);
            $.each(validData, function (index, value) {

                // console.log(index)
                if (index < 16) {
                    let imageUrl = value.multimedia[4].url;
                    let articleUrl = value.url;
                    let storyAbstract = value.abstract;
                    // console.log(storyAbstract);
                    // console.log(imageUrl);
                    $(".stories").append(`<a href="${articleUrl}" target=blanck class="story" style="background-image: url(${imageUrl})"><div class="abstract"><p>${storyAbstract}</p></div></a>`)
                }
            })
        })
        .fail(function () {
            $(".stories").append('Sorry there was an error.');
        })
        .always(function () {
            $(".loading-div").hide();
        });
}
