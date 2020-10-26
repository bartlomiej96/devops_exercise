provider "aws" {
  region = "eu-central-1"
}

resource "aws_instance" "example" {
  count = 2
  ami           = "ami-02cd1b30fd700dea1"
  instance_type = "t2.micro"
  key_name      = "exercise"
  security_groups = ["exer-sec"]
	
  tags = {
    Name = "Exercise VM ${count.index}"
  }
}
