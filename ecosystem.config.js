module.exports = {
    apps: [
      {
        name: "react-app",
        script: "serve",
        args: "-s build -l 3000", // Adjust the port if needed
        env: {
          NODE_ENV: "production"
        }
      }
    ]
  };
  