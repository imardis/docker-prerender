Steps to run
After making changes commit and do step1

1)docker build -t imardis/prerender 

To make these changes reflected in AWS repo follow step 2 to 5

2)Import-Module AWSPowerShell
3)(Get-ECRLoginCommand -Region eu-west-2).Password | docker login --username AWS --password-stdin 622950713627.dkr.ecr.eu-west-2.amazonaws.com
4)docker tag imardis/prerender:latest 622950713627.dkr.ecr.eu-west-2.amazonaws.com/portal/prerender:latest
5)docker push 622950713627.dkr.ecr.eu-west-2.amazonaws.com/portal/prerender:latest