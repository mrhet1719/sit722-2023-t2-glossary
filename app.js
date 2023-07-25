const express = require('express');
const app = express();
const router = express.Router();

// Set the view engine to 'ejs'
app.set('view engine', 'ejs');
app.use(express.static('public'));

const glossary = [
  {
    Term: 'DevOps',
    Definition: 'DevOps is a set of practices that combine development (Dev) and IT operations (Ops) to improve collaboration, automation, and efficiency in the software development lifecycle. It aims to deliver high-quality software more frequently and reliably.',
    References: '[1] "DevOps," Wikipedia. [Online]. Available: https://en.wikipedia.org/wiki/DevOps.'
  },
  // Add more glossary terms here
  {
    Term: 'Continuous Integration (CI)',
    Definition: 'Continuous Integration is a software development practice where code changes are automatically integrated and tested whenever developers commit code to a shared repository. It ensures early bug detection and promotes a smooth development workflow.',
    References: '[2] Atlassian, "Continuous Integration," Atlassian. [Online]. Available: https://www.atlassian.com/continuous-delivery/continuous-integration.'
  },
  {
    Term: 'Continuous Deployment (CD)',
    Definition: 'Continuous Deployment is an extension of Continuous Integration, where every validated code change is automatically deployed to production. It enables faster delivery of new features and bug fixes, reducing manual intervention.',
    References: '[3] Red Hat, "Continuous Deployment," Red Hat. [Online]. Available: https://www.redhat.com/en/topics/devops/what-is-continuous-deployment.'
  },
  {Term: 'Version Control',
  Definition: 'Version control is a system that manages changes to files or source code over time. It allows developers to track modifications, collaborate, and revert to previous versions if needed.',
  References: '[4] Atlassian Bitbucket, "Version Control," Atlassian. [Online]. Available: https://www.atlassian.com/git/tutorials/what-is-version-control.'
},
{
    Term: 'Containerization',
Definition: 'Containerization is a technology that allows packaging and isolating applications and their dependencies in lightweight containers. Containers provide a consistent and portable environment for software to run, enhancing scalability and deployment efficiency.',
References: '[5] Docker, "Containerization," Docker. [Online]. Available: https://www.docker.com/resources/what-container.'
},
{
    Term: 'Microservices',
Definition: 'Microservices is an architectural style that structures a software application as a collection of small, loosely coupled services. Each service is independently deployable and focuses on specific business capabilities, promoting flexibility and maintainability.',
References: '[6] Microsoft Azure, "Microservices," Microsoft Azure. [Online]. Available: https://azure.microsoft.com/en-us/blog/microservices-architecture-overview/.https://azure.microsoft.com/en-us/blog/microservices-architecture-overview'
},
{
    Term: 'Infrastructure as Code (IaC)',
Definition: 'Infrastructure as Code is an approach where infrastructure is defined and managed through machine-readable code. It enables automated provisioning, configuration, and management of infrastructure, promoting consistency and reducing manual errors.',
References: '[7] HashiCorp, "Infrastructure as Code," HashiCorp. [Online]. Available: https://www.hashicorp.com/resources/what-is-infrastructure-as-code.'
},
{
    Term: 'Continuous Monitoring',
Definition: 'Continuous Monitoring involves continuously monitoring and collecting data about software applications and infrastructure in real-time. It helps identify performance issues, security vulnerabilities, and ensures reliable service delivery.',
References: '[8] SolarWinds, "Continuous Monitoring," SolarWinds. [Online]. Available: https://www.solarwinds.com/topics/what-is-continuous-monitoring.'
},
{
    Term: 'Agile',
Definition: 'Agile is an iterative and incremental approach to software development that emphasizes collaboration, flexibility, and customer feedback. It promotes adaptive planning and continuous improvement throughout the development process.',
References: '[9] Agile Alliance, "Agile," Agile Alliance. [Online]. Available: https://www.agilealliance.org/agile101/.https://www.agilealliance.org/agile101/'
},

];

// Define the route for rendering "index.ejs"
router.get('/', function(req, res, next) {
  res.render('index', { glossary });
});

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
