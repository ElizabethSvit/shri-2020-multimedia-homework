let context, analyser, canvasCtx;
const WIDTH = 450;
const HEIGHT = 70;

export function initiate(currentVideoId) {
    context = context || new AudioContext();
    let canvas = document.getElementById('audio-canvas');
    canvasCtx = canvas.getContext('2d');

    const mediaElement = document.getElementById(currentVideoId);
    const source = context.createMediaElementSource(mediaElement);
    analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.9;

    source.connect(analyser);
    analyser.connect(context.destination);

    draw();
}

function draw() {
    analyser.fftSize = 256;
    let bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);
    let dataArray = new Uint8Array(bufferLength);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = 'white';
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    let barWidth = (WIDTH / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for(let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ', 0, 150)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
    }
    requestAnimationFrame(draw);
}
