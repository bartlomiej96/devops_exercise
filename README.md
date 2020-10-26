# Ansible | Packer | Terraform 

Deplyed AWS EC2 Linux instance for exercise.

Rember to create Key pair and copy it to machine for use with installation deployed using Ansible etc.

Remember to create an [Access Key](https://console.aws.amazon.com/iam/home?#/security_credentials) for exercise use.

## Ansible installation
```bash
sudo amazon-linux-extras install ansible2
```
## Packer installation
```bash
wget https://releases.hashicorp.com/packer/1.5.4/packer_1.5.4_linux_amd64.zip
sudo unzip packer_1.5.4_linux_amd64.zip -d /usr/local/bin
```
## Terraform installation
[Doc](https://learn.hashicorp.com/tutorials/terraform/install-cli)
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum -y install terraform
terraform -help
```
## Additional installs
boto is required for AWS and Ansible usage (pip not installed on machine)
```bash
sudo easy_install pip
pip install boto3

sudo /usr/bin/python -m easy_install pip
sudo /usr/bin/python -m pip install boto
```
## AWS Configure for setup of AWS ACCESS Key etc. for use with for ex. Ansible
```bash
aws configure
```
AWS ACCESS Key ID: 
...
```bash
aws configure list
```
## Ansible - Setup EC2 instance with security group
Using Amazon extras, systemd for services & geerlingguy java role from Ansible Galaxy
[galaxy.ansible.com](https://galaxy.ansible.com/geerlingguy/java)
```bash
ansible-galaxy install geerlingguy.java
ansible-playbook -i hosts ec2-java-tomcat.yml
```
## Packer AMI - simple AMI deployment for use with terraform later
```bash
packer build ec2-aws-instance.js
```
You can check ami id in AWS or copy from terminal

## Use terraform to deploy multiple instances of AMI
```bash
mkdir terraform
vi main.tf
terraform init
terraform plan
terraform apply
```
You can remove created resources using
```bash
terraform destroy
```
## Use terraform to deploy lambda function (simple hello-world)
```bash
zip helloworld helloworld.py
terraform init
terraform plan
terraform apply
```
You can remove created resources using
```bash
terraform destroy