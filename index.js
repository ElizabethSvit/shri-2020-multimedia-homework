import { initVideo } from './initVideo.js';
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

$('.remove-tag').click(function(evt) {
    window.location.reload();
    $('.remove-tag').hide();
});

$('#video-1').click(function(evt) {
    evt.preventDefault();
    $('#video-1').toggleClass('animate');
    $('#video-2, #video-3, #video-4').hide();
    $('.remove-tag').show();
    $('.sliders').css('display', 'flex');
    currentVideoId = 'video-1';
});

$('#video-2').click(function(evt) {
    evt.preventDefault();
    $('#video-2').toggleClass('animate');
    $('#video-1, #video-3, #video-4').hide();
    $('.remove-tag').show();
    $('.sliders').css('display', 'flex');
    currentVideoId = 'video-2';
});

$('#video-3').click(function(evt) {
    evt.preventDefault();
    $('#video-3').toggleClass('animate');
    $('#video-2, #video-1, #video-4').hide();
    $('.remove-tag').show();
    $('.sliders').css('display', 'flex');
    currentVideoId = 'video-3';
});

$('#video-4').click(function(evt) {
    evt.preventDefault();
    $('#video-4').toggleClass('animate');
    $('#video-1, #video-3, #video-2').hide();
    $('.remove-tag').show();
    $('.sliders').css('display', 'flex');
    currentVideoId = 'video-4';
});