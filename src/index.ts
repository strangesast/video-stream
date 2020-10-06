import * as Hls from 'hls.js';

const URL = `${window.location.origin}/hls/stream/index.m3u8`;
const video = document.getElementById('video') as HTMLVideoElement;

if(Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(URL);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());

} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = URL;
  video.addEventListener('loadedmetadata', () => video.play());

}
