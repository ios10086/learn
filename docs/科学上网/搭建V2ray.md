# 搭建V2ray

### SSH远程连接

`ssh root@104.225.156.166 -p 27178`

### 安装Curl

ubuntu/debian 系统安装 Curl 方法: `apt-get update -y && apt-get install curl -y`
centos 系统安装 Curl 方法: `yum update -y && yum install curl -y`

### 脚本放到服务器上

`scp -r -P 27178 /Users/mac/Desktop/v2ray root@104.225.156.166:/root`

### 运行脚本

`bash /v2ray/install.sh`

