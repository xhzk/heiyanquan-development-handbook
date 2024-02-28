

# 云服务器配置

## 一、JDK环境安装

### 1.查看`Java`版本

```
java -version
```

如果出现command not found提示，说明没有安装过Java，否则需要卸载

### 2.上传`Java`安装包

```
cd /usr // 切换至usr目录
ls // 查看当前目录中所有文件的文件名
mkdir java // 创建名称为java的文件夹
```

上传`jdk`到`/usr/java`

### 3.解压

```
cd java
ls
tar -zxcf (jdk包名称).tar.gz
```

4.删除安装包

```
rm -rf (jdk包名称).tar.gz // 删除指定包
```

### 5.配置`jdk`

```
vi /etc/profile
```

> [!NOTE]
>
> 英文状态下，按下键盘 i 键或者按 shift + A，使之进入可编辑状态

在最后一行，添加如下代码

```
#java environment
export JAVA_HOME=/usr/java/(jdk名称)
export CLASSPATH=.:${JAVA_HOME}/jre/lib/rt.jar:${JAVA_HOME}/lib/dt.jar:${JAVA_HOME}/lib/tools.jar
export PATH=$PATH:${JAVA_HOME}/bin
```

> [!NOTE]
>
> 按下键盘 `esc` 键，取消编辑状态
>
> 区分编辑和非编辑状态，看是否有`INSERT`标志
>
> 退出编辑状态后，按下` :wq `回车，进行保存并退出。(当输入有误时，或者文件被改乱，则按 `:q!` 进行退出且不保存，然后重新进行即可)

### 6.让环境变量生效

```
source /etc/profile
```

下方没提示任何信息，则表示配置成功，否则都表示配置未成功

### 7、检查是否配置成功

```
java -version
```

出现信息则为成功

## 二、MySql环境安装

### 1.上传`MySql`安装包

上传至`opt`目录下

### 2.检查是否安装过`MySql`

```
rpm -qa|grep mysql
```

若后面有其他提示，则表示已经安装过`Mysql`，需要进行卸载。回车过后，没有任何提示信息，则直接跳过，执行下一步操作即可

```
yum remove mysql
rpm –qa|grep mysql
rpm –e mysql_libs
rpm -e --nodeps mysql_libs
```

### 3.检查是否安装过`mariadb`

```
rpm –qa|grep maridb
```

若回车执行后，下方没有任何提示信息，则可以跳过此步骤，执行下一步。若有，则进行卸载操作

```
rpm -e --nodeps mariadb-libs
```

### 4.安装`MySql`依赖包

```
yum install -y libaio
yum install -y numactl
```

### 5.解压`MySql`

```
tar -zxvf (文件名).tar.gz
```

### 6.重命名并移动位置

```
mv (原文件名) mysql
```

将 `/opt/mysql`文件夹移动到 `/usr/local`下

```
mv /opt/mysql /usr/local/
```

换到`/usr/local/mysql`目录下，并在该目录下，创建`mysqldb`文件夹

```
cd /usr/local/mysql
mkdir mysqldb
```

### 7.`MySql`安装目录并赋予权限

```
chmod -R 777 /usr/local/mysql
```

### 8.创建`MySql`组和用户

切换到`usr/local/mysql`目录下；并创建组

```
groupadd mysql
```

创建用户(-s /bin/false 参数指定mysql用户仅拥有所有权，而没有登录权限)

```
useradd –r –g mysql –s /bin/false mysql
```

将用户添加到组中

```
chown –R mysql:mysql ./
```

查看是否添加成功

```
id mysql
```

### 9.修改`MySql`配置文件

```
vi /etc/my.cnf
```

```
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=/usr/local/mysql
# 设置mysql数据库的数据的存放目录
datadir=/usr/local/mysql/mysqldb
# 允许最大连接数
max_connections=10000
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
# 是否对sql语句大小写敏感，1表示不敏感
lower_case_table_names = 1
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```

### 10.安装`MySql`

切换到` /usr/local/mysql/bin` 目录下，执行安装操作

```
./mysqld --initialize --console
```

> [!WARNING]
>
> 初始化安装成功后，一定要将初始化密码记住
>
> A temporary password is generated for root@localhost: >  **这句话后面的这里的乱码就是初始密码**

### 11.启动`MySql`服务

给`/usr/local/mysql`目录赋予权限

```
chmod -R 777 /usr/local/mysql
```

赋予权限完成后，切换到` /usr/local/mysql/support-files`目录下，执行`mysql.server start`命令，有`SUCCESS`提示代表成功，否则都为失败

### 12.将`MySql`添加到系统进程中

```
cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
```

### 13.设置`MySql`自动启动

```
chmod +x /etc/init.d/mysqld
systemctl enable mysqld
```

### 14.修改root登录密码

切换到 `/usr/local/mysql/bin` 目录下执行

```
./mysql -uroot -p
```

进入mysql操作

```
alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
```

### 15.设置允许远程登录

```
use mysql;
update user set user.Host='%' where user.User='root';
flush privileges;
```

设置好后，输入quit退出mysql操作

### 16.重启服务并测试

```
systemctl restart mysql
systemctl status mysql
```

##  三、Redis环境安装及配置

### 1.安装gcc依赖

```
yum install –y gcc
```

### 2.下载并解压安装包

```
wget http://download.redis.io/releases/(所需版本).tar.gz
ls
```

```
tar -zxvf (所需版本).tar.gz
```

### 3.安装编译redis

切换至解压后的目录

```
make
make install PREFIX=/usr/local/redis
```

### 4.设置后台启动

```
//将redis的源码目录中复制redis.conf 到 redis的安装目录
cp /usr/local/redis-5.0.3/redis.conf /usr/local/redis/bin 
```

```
cd /usr/local/redis/bin
vi redis.conf
```

将`daemonize no` 改为` daemonize yes`

```
// 使修改生效
./redis-server redis.conf
```

### 5.设置开机启动

```
vi  /etc/systemd/system/redis.service
```

```
[Unit]
Description=redis-server
After=network.target
 
[Service]
Type=forking
ExecStart=/usr/local/redis/bin/redis-server /usr/local/redis/bin/redis.conf
PrivateTmp=true
 
[Install]
WantedBy=multi-user.target
```

设置开机启动

```
systemctl daemon-reload
systemctl start redis.service
systemctl enable redis.service
ln -s /usr/local/redis/bin/redis-cli /usr/bin/redis
```

### 6.设置远程连接redis，并设置密码

```
vi  /usr/local/redis/bin/redis.conf
```

将bind 127.0.0.1 修改为 bind 0.0.0.0

设置密码，找到下面这一行`#requirepass foobared `去掉注释，并修改密码为所需密码

重启服务

```
systemctl restart redis.service
```

## 四、Nginx环境安装

### 1.下载并解压安装包

切换到`usr/local`目录

```
wget http://nginx.org/download/(nginx版本号).tar.gz
```

```
tar -zxcf (nginx版本号).tar.gz
```

### 2.安装

安装`nginx`依赖库

```
yum install -y gcc-c++
yum install -y pcre pcre-devel
yum install -y zlib zlib-devel
yum install -y openssl openssl-devel
```

切换到`nginx`解压目录下

```
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
```

```
./configure
make
```

### 3.设置nginx开机启动

切换到 `/lib/systemd/system` 目录下 打开` nginx.service`文件

```
[Unit]
Description=nginx 
After=network.target 
   
[Service] 
Type=forking 
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx reload
ExecStop=/usr/local/nginx/sbin/nginx quit
PrivateTmp=true 
   
[Install] 
WantedBy=multi-user.target
```

修改完成后，保存并退出，执行以下命令

```
systemctl enable nginx.service
```

执行`systemctl start nginx.service`启动`nginx`服务

```
systemctl start nginx.service
```

