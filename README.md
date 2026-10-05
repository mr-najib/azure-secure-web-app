# Azure Secure Web App

A Node.js web application deployed to Microsoft Azure App Service using an automated GitHub Actions CI/CD pipeline.

This project demonstrates practical cloud engineering skills including Azure App Service deployment, GitHub-based source control, CI/CD automation, identity-based authentication, application logging, and troubleshooting.

## Architecture

text
Developer
    |
    | Git Push
    v
GitHub Repository
    |
    | Triggers
    v
GitHub Actions
    |
    | OIDC Authentication
    v
Azure
    |
    v
Azure App Service
    |
    v
Node.js Web Application


## Technologies Used

- Microsoft Azure
- Azure App Service
- Linux App Service Plan
- Node.js 22
- GitHub
- GitHub Actions
- CI/CD
- OpenID Connect (OIDC)
- Azure Managed Identity
- Azure Log Stream

## CI/CD Pipeline

The application uses GitHub Actions for continuous integration and deployment.

When code is pushed to the main branch:

1. GitHub Actions starts the deployment workflow.
2. The repository is checked out.
3. The Node.js application is prepared for deployment.
4. GitHub Actions authenticates to Azure.
5. The application is deployed to Azure App Service.
6. Azure starts the Node.js application.

This provides an automated deployment workflow:

text
Code Change
   ↓
Git Push
   ↓
GitHub Actions
   ↓
Build
   ↓
Deploy
   ↓
Azure App Service


## Authentication

The deployment uses identity-based authentication between GitHub Actions and Azure rather than storing a traditional deployment username and password in the repository.

The deployment was configured using Azure managed identity and federated authentication with GitHub.

## Application Configuration

The Node.js application listens on the port supplied by the Azure App Service environment.

javascript
const port = process.env.PORT || 3000;


This allows the application to run locally while remaining compatible with Azure App Service.

## Troubleshooting Exercise

During deployment, the GitHub Actions workflow completed successfully, but the public application returned:

text
503 Service Unavailable


Because the deployment pipeline had succeeded, the next troubleshooting step was to investigate the application runtime.

Azure App Service *Log Stream* was used to inspect the Node.js startup logs.

The logs identified a JavaScript syntax error in server.js:

text
SyntaxError: missing ) after argument list


The error prevented the Node.js process from starting, which caused the application to return HTTP 503.

The syntax error was corrected and committed to the main branch.

GitHub Actions automatically triggered a new deployment.

After the new deployment completed, the Node.js application started successfully and the website became available.

### Troubleshooting Flow

text
503 Service Unavailable
        ↓
Check GitHub Actions
        ↓
Deployment Successful
        ↓
Check Azure Log Stream
        ↓
Node.js Startup Failure
        ↓
Identify SyntaxError
        ↓
Correct server.js
        ↓
Commit to GitHub
        ↓
GitHub Actions Redeploys
        ↓
Application Running Successfully


## Key Skills Demonstrated

- Deploying applications to Azure App Service
- Configuring GitHub Actions CI/CD
- Working with Git and GitHub
- Using identity-based Azure authentication
- Reading Azure application logs
- Diagnosing HTTP 503 errors
- Troubleshooting Node.js startup failures
- Automating cloud application deployments

## Future Improvements

Planned improvements include:

- Azure Application Insights
- Azure Monitor alerts
- Application health endpoint
- Improved CI validation and automated testing
- Security hardening
- Infrastructure as Code using Bicep
- Enhanced monitoring and observability

## Project Status

*Application deployment: Complete*

*GitHub Actions CI/CD: Complete*

*Runtime troubleshooting: Complete*

*Monitoring and security enhancements: In progress*
