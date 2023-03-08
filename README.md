# COEN 241 Project -- Mail Server

By Jihao Chen, Yangzhang Zhou, Fangfang Lin, Weizhou Wen


# 1. Deploy Database

Create a virtual machine containing mysql-server

```
$ cd infra
$ multipass launch -n vmDB --cloud-init ./cloud-config-db.yaml
```

Obtain the IP address of the machine hosting the database. Open `mysqld.cnf` and locate the line that specifies the `bind-address` parameter. Comment out this line, then save and restart the service. With this modification, MySQL will now listen on all available network interfaces, allowing remote connections.

```
$ multipass list
Name                    State             IPv4             Image
vmDB                    Running           192.168.64.13    Ubuntu 22.04 LTS
$ ssh ubuntu@192.168.64.13
$ sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
# comment out bind-address in mysqld.cnf
$ sudo systemctl restart mysql.service
```

Create root privileges for other IP addresses so we can connect to this mysql remotely 

```
$ sudo mysql
mysql>CREATE USER 'root'@'192.168.64.14' IDENTIFIED BY 'password';
mysql>GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.64.14' mysql>WITH GRANT OPTION;
mysql>FLUSH PRIVILEGES;
```

# 2. Deploy Java Services

Create a virtual machine containing docker, then transfer Dockerfile and the tgz file of service to this VM

```
$ cd infra
$ multipass launch -c 2 -n vmService1 --cloud-init ./cloud-config-docker.yaml
$ multipass transfer Dockerfile vmService1:.
$ multipass transfer mailServer_jar.tgz vmService1:.
```

Connect to the VM. Build an server image based on Dockfile, then start a container based on this image
```
$ ssh ubuntu@192.168.64.14
$ sudo docker build -t server_image ./
$ sudo docker run -d -t --network host server_image
```

We now have a Java server running in a Docker container on this VM.

# 3. Deploy Load Balancer

Create a virtual machine containing nginx, then transfer nginx.conf to this VM

```
$ cd infra
$ multipass launch -n vmLoadBalancer --cloud-init ./cloud-config-nginx.yaml
$ multipass transfer nginx.conf vmLoadBalancer:.
```

Connect to this VM. Change nginx configuration and restart service
```
$ ssh ubuntu@192.168.64.15
$ sudo cp nginx.conf /etc/nginx/nginx.conf
$ sudo systemctl restart nginx.service
```

# 4. Start Frontend Application

Now we can start our application and use these services

```
cd frontend
npm start
```
