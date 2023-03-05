multipass launch -n vmDB --cloud-init ./cloud-config-db.yaml
multipass launch -c 2 -n vmService1 --cloud-init ./cloud-config-docker.yaml
multipass launch -c 2 -n vmService2 --cloud-init ./cloud-config-docker.yaml
multipass launch -n vmLoadBalancer --cloud-init ./cloud-config-nginx.yaml

multipass transfer mailServer_jar.tgz vmService1:.
multipass transfer Dockerfile vmService1:.

multipass transfer mailServer_jar.tgz vmService2:.
multipass transfer Dockerfile vmService2:.

multipass transfer nginx.conf vmLoadBalancer:.
sudo cp nginx.conf /etc/nginx/nginx.conf
sudo systemctl restart nginx.service

sudo docker build -t server_image ./
sudo docker run -d -t --network host server_image
