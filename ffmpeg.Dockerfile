FROM ubuntu:xenial

RUN apt-get update && apt-get install -y ffmpeg

CMD ffmpeg -f video4linux2 -i /dev/video0 -c:v libx264 -an -f flv rtmp://$STREAM_HOST/hls/stream
