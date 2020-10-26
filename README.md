#Ansible | Packer | Terraform 

##Ansible - instalacja
sudo amazon-linux-extras install ansible2
#Packer - instalacja
wget https://releases.hashicorp.com/packer/1.5.4/packer_1.5.4_linux_amd64.zip
sudo unzip packer_1.5.4_linux_amd64.zip -d /usr/local/bin
#Terraform - instalacja
https://learn.hashicorp.com/tutorials/terraform/install-cli
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum -y install terraform
terraform -help

#Additional installs
#boto is required for AWS and Ansible usage (pip not installed on machine)
sudo easy_install pip
pip install boto3

sudo /usr/bin/python -m easy_install pip
sudo /usr/bin/python -m pip install boto

#AWS Configure for setup of AWS ACCESS Key etc. for use with for ex. Ansible
aws configure
AWS ACCESS Key ID [NONE]: 
...
aws configure list
#Ansible - Setup EC2 instance with security group
#using Amazon extras, systemd for services
ansible-galaxy install geerlingguy.java
ansible-playbook -i hosts ec2-java-tomcat.yml

#Packer AMI - simple AMI deployment for use with terraform later
packer build ec2-aws-instance.js
#You can check ami id in AWS or copy from terminal

#Use terraform to deploy multiple instances of AMI
mkdir terraform
vi main.tf
terraform init
terraform plan
terraform apply -> yes

terraform destroy

#Use terraform to deploy lambda function (simple hello-world)
zip helloworld helloworld.py
terraform init
terraform plan
terraform apply -> yes
