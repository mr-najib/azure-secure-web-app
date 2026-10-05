const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Azure Secure Web App</title>
      </head>
      <body>
        <h1>Azure Secure Web App</h1>
        <p>Successfully deployed to Azure App Service.</p>
        <p>CI/CD powered by GitHub Actions.</p>
      </body>
    </html>
  `);
});

server.listen(port, "0.0.0.0", () => {
  console.log(Server running on port ${port});
});
