const videoPlayer = document.querySelector('[data-type="video-player"]');
const videoPlay = document.querySelector('[data-type="video-play"]');

const play = () => {
  videoPlayer.src += '?autoplay=1';
  videoPlayer.style.display = 'block';
  videoPlay.style.display = 'none';
};

export const onPlay = () => {
  if (videoPlay) {
    videoPlay.addEventListener('click', play);
  }
};
