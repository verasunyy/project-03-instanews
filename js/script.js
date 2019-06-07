$(function () {

    //run select tag plug-in
    $(function () {
        $('select').selectric();
    });

    const $header = $("header");
    const $loading = $(".loading-div");
    const $stories = $(".stories");

    $('#selector').on('change', function () {
        $loading.show();
        $header.addClass("active");

        const section = $(this).val();
        $stories.html("");
        if (section !== 'section') {
            loadStories(section);
        }
        else {
            $loading.hide();
            $header.removeClass("active");
        }
    });
    function loadStories(section) {
        $.ajax({
            method: 'get',
            url: `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=81xlA4cYvKGRAH8yiQiiE2CuHr82DZDM`
        })
            .done(gettingContent(data))
            .fail(function () {
                $stories.append('Sorry there was an error.');
            })
            .always(function () {
                $loading.hide();
            });
    };

    function gettingContent(data) {
        const validData = data.results.filter(item => item.multimedia.length == 5).slice(0, 12);
        $.each(validData, function (index, value) {
            let imageUrl = value.multimedia[4].url;
            let articleUrl = value.url;
            let storyAbstract = value.abstract;
            $stories.append(`<a href="${articleUrl}" target=blanck class="story" >
        <article class="background" style="background-image: url(${imageUrl})">
        <h2 class="abstract">${storyAbstract}</h2>
        </article>
        </a>`)
        })
    }

})
