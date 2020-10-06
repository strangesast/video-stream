# Video Stream
A baseline nginx / ffmpeg / docker setup to stream video from a linux video device.

The ffmpeg & nginx services may be on separate machines (may be ideal with a pi).  The base docker-compose runs them on the same internal network.  The nginx server can host multiple streams when each uses a unique name.

# Alt Nginx compile config
```
./configure --with-http_ssl_module --with-debug --with-cc-opt="-Wimplicit-fallthrough=0" --add-dynamic-module=../ngx_http_auth_pam_module-master --add-module=/tmp/nginx-rtmp-module-1.2.1 && make modules && make -w && make install
```

# RaspberryPi camera
```
raspivid -o - -t 0 -vf -hf -fps 30 -b 6000000 | ffmpeg -re -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 -i /dev/zero -f h264 -i - -vcodec copy -acodec aac -ab 128k -g 50 -strict experimental -f flv rtmp://raspberrypi/hls/stream
# accessible at rtmp://raspberrypi/hls/stream
```
