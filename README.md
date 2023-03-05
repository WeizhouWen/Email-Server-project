# COEN241-Project

# delete instance
```
multipass stop <name>
multipass delete --purge <name>
```

# Connect mysql from other vm

```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf
# then comment out bind-address
sudo systemctl restart mysql.service

sudo mysql
CREATE USER 'root'@'_gateway' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'_gateway' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE USER 'root'@'192.168.64.14' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.64.14' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE USER 'root'@'192.168.64.15' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'192.168.64.15' WITH GRANT OPTION;
FLUSH PRIVILEGES;

# from host machine
mysql mysql -h 192.168.64.13 -u root -p
```

# Compress, Uncompress, run services
```
cd ./backend/out/artifacts
tar -czvf mailServer_jar.tgz mailServer_jar
cp mailServer_jar.tgz ../../../infra/mailServer_jar.tgz
cd ../../../infra

tar -xvf mailServer_jar.tgz
java -jar ./mailServer_jar/mailServer.jar
```
