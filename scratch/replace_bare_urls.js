const fs = require('fs');
let s = fs.readFileSync('app.js', 'utf8');

const urlMap = {
  'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html': 'AWS Lambda – Developer Guide',
  'https://docs.aws.amazon.com/lambda/latest/dg/getting-started.html': 'AWS Lambda – Getting Started',
  'https://docs.aws.amazon.com/lambda/latest/dg/lambda-services.html': 'AWS Lambda – Services & Triggers',
  'https://docs.aws.amazon.com/lambda/latest/dg/lambda-monitoring.html': 'AWS Lambda – Monitoring & CloudWatch',
  'https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html': 'AWS Lambda – Execution Roles & IAM',
  'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/infrastructure-as-code.html': 'AWS DevOps – Infrastructure as Code',
  'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-formats.html': 'AWS CloudFormation – Template Formats',
  'https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/aws-resource-ec2-instance.html': 'AWS CloudFormation – EC2 Resource Reference',
  'https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-direct.html': 'AWS CloudFormation – Updating Stacks',
  'https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html': 'AWS Systems Manager – Overview',
  'https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html': 'AWS Migration – 7Rs Migration Strategies',
  'https://docs.aws.amazon.com/vm-import/latest/userguide/what-is-vmimport.html': 'AWS VM Import/Export – User Guide',
  'https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html': 'AWS Database Migration Service (DMS)',
  'https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html': 'AWS Schema Conversion Tool (SCT)',
  'https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html': 'AWS Elastic Disaster Recovery (DRS)',
  'https://docs.docker.com/learn/content/what-is-a-container/': 'Docker – What is a Container?',
  'https://docs.docker.com/engine/install/': 'Docker – Engine Installation Guide',
  'https://docs.docker.com/reference/dockerfile/': 'Docker – Dockerfile Reference',
  'https://docs.docker.com/engine/storage/volumes/': 'Docker – Manage Data in Volumes',
  'https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html': 'Amazon ECR – Pushing Docker Images',
  'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html': 'Amazon ECS – Developer Guide',
  'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html': 'Amazon ECS – AWS Fargate Serverless',
  'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/getting-started-fargate.html': 'Amazon ECS – Getting Started with Fargate',
  'https://docs.aws.amazon.com/whitepapers/latest/introduction-devops-aws/continuous-integration.html': 'AWS DevOps – Continuous Integration',
  'https://docs.aws.amazon.com/codepipeline/latest/userguide/ecs-cd-pipeline.html': 'AWS CodePipeline – ECS Continuous Delivery',
  'https://aws.amazon.com/what-is/data-lake/': 'AWS Cloud – What is a Data Lake?',
  'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/analytics.html': 'AWS Analytics – Overview & Architecture',
  'https://docs.aws.amazon.com/athena/latest/ug/what-is.html': 'Amazon Athena – Interactive SQL Query',
  'https://aws.amazon.com/what-is/business-intelligence/': 'AWS Cloud – What is Business Intelligence?',
  'https://docs.aws.amazon.com/quick/latest/userguide/creating-a-visual.html': 'Amazon QuickSight – Creating Visuals',
  'https://aws.amazon.com/what-is/machine-learning/': 'AWS Cloud – Machine Learning on AWS',
  'https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html': 'Amazon SageMaker – Developer Guide',
  'https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works-training.html': 'Amazon SageMaker – Model Training',
  'https://docs.aws.amazon.com/sagemaker/latest/dg/deploy-model.html': 'Amazon SageMaker – Model Deployment',
  'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html': 'AWS Overview – Introduction to Cloud Services'
};

let count = 0;
for (const [url, title] of Object.entries(urlMap)) {
  // If url is preceded by whitespace or quotes and not by [ or (
  // In app.js: ref: "https://..." or ref: "[...](...)\nhttps://..."
  // Match exact bare url
  const target1 = `"${url}"`;
  const replace1 = `"[${title}](${url})"`;
  while (s.includes(target1)) {
    s = s.replace(target1, replace1);
    count++;
  }

  const target2 = `\\n${url}"`;
  const replace2 = `\\n[${title}](${url})"`;
  while (s.includes(target2)) {
    s = s.replace(target2, replace2);
    count++;
  }

  const target3 = `\\n${url}\\n`;
  const replace3 = `\\n[${title}](${url})\\n`;
  while (s.includes(target3)) {
    s = s.replace(target3, replace3);
    count++;
  }

  const target4 = `"${url}\\n`;
  const replace4 = `"[${title}](${url})\\n`;
  while (s.includes(target4)) {
    s = s.replace(target4, replace4);
    count++;
  }
}

console.log(`Replaced ${count} bare URLs with formatted Markdown links!`);
fs.writeFileSync('app.js', s, 'utf8');
