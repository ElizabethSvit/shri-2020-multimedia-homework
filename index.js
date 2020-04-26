import { initVideo } from './initVideo.js';
import { initiate } from './audioViz.js'

initVideo(
    document.getElementById('video-1'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8'
);

initVideo(
    document.getElementById('video-2'),
    'http://localhost:9191/live?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fstairs%2Fmaster.m3u8'
);

initVideo(
    document.getElementById('video-3'),
    'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8'
);

initVideo(
    document.getElementById('video-4'),
    'http://localhost:9191/live?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fstreet%2Fmaster.m3u8'
);

$('.video').click(evt => {
    evt.preventDefault();
    const targetElement = $(evt.target);
    currentVideoId = evt.target.id;

    const currPosition = $(evt.target).offset();
    targetElement.css({
        'z-index': 3,
        'position' : 'fixed',
        'left': currPosition.left,
        'top': currPosition.top,
    }).animate({
        'left': 0,
        'top': 0,
        'width': '100%',
        'height':'100%'
    }, 700);

    $('.remove-tag').off().click(evt => {
        targetElement.animate({
            'left': currPosition.left,
            'top': currPosition.top,
            'width': '300px',
            'height':'200px'
        }, 700, () => {
            targetElement.css({
                'z-index': 1,
                'position' : 'absolute',
                'left': 0,
                'top': 0,
            });
        });
        $(".background").animate({
            opacity: 0,
        }, 700, () => {
            $(".background").css('display','none')
        });
        $(".controls").animate({
            opacity: 0,
        }, 700, () => {
            $(".controls").css('display','none')
        });
        $("#audio-canvas").animate({
            opacity: 0,
        }, 700, () => {
            $("#audio-canvas").css('display','none')
        });
    });
    $(".background").css('display','block').animate({
        opacity: 1,
    }, 700);
    $(".controls").css('display','block').animate({
        opacity: 1,
        height: false,
    }, 700);
    $("#audio-canvas").css('display','block').animate({
        opacity: 1,
    }, 700);
    initiate(currentVideoId);
});
