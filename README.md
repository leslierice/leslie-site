# Create static site 
# Flask, AWS Elastic Beanstalk, AWS S3

AWS create IAM user  
Create access key, get secret key  
Give user Elastic Beanstalk permissions  

Create AWS s3 bucket  
Upload images  

aws configure  
virtualenv eb-virt  
source eb-vrit/bin/activate  
pip install flask==0.10.1  
pip freeze > requirements.txt  
deactivate  
eb init -p python2.7 leslie-site  
eb open  
