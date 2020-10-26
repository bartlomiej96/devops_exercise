# Ansible | Packer | Terraform 

Foobar is a Python library for dealing with word pluralization.

## Ansible installation
```bash
sudo amazon-linux-extras install ansible2
```
# Packer installation
```bash
wget https://releases.hashicorp.com/packer/1.5.4/packer_1.5.4_linux_amd64.zip
sudo unzip packer_1.5.4_linux_amd64.zip -d /usr/local/bin
```
# Terraform installation
[Doc]
(https://learn.hashicorp.com/tutorials/terraform/install-cli)
```bash
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
sudo yum -y install terraform
terraform -help
```
# Additional installs
# boto is required for AWS and Ansible usage (pip not installed on machine)
```bash
sudo easy_install pip
pip install boto3

sudo /usr/bin/python -m easy_install pip
sudo /usr/bin/python -m pip install boto
```