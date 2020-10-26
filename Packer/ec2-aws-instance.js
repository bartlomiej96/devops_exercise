{
  "variables": {
    "aws_access_key": "{{env `AWS_ACCESS_KEY_ID`}}",
    "aws_secret_key": "{{env `AWS_SECRET_ACCESS_KEY`}}"
  },
  "builders": [
    {
      "type": "amazon-ebs",
      "access_key": "{{user `aws_access_key`}}",
      "secret_key": "{{user `aws_secret_key`}}",
      "region": "eu-central-1",
      "source_ami": "ami-00a205cb8e06c3c4e",
      "instance_type": "t2.micro",
      "ssh_username": "ec2-user",
      "ami_name": "packer_AWS {{timestamp}}"
    }
  ]
}
