# Video Stream
A baseline nginx / ffmpeg / docker setup to stream video from a linux video device.

The ffmpeg & nginx services may be on separate machines (may be ideal with a pi).  The base docker-compose runs them on the same internal network.  The nginx server can host multiple streams when each uses a unique name.
