## Contributing

If you're interested in contributing ideas or code to Solide, you're in the right place!

## Git workflow

`main` is our main branch.

Developers MUST create branches from the `main` branch. Once the code is ready, create a PR that targets the main branch.

We use the **Git Merge** policy for merging PRs.

# Contributing to the Solide Project

Thank you for considering contributing to the Solide project! Before you start, please make sure to read and follow these guidelines to ensure smooth collaboration.

## Development Setup

To start developing, you need to install `node` and clone the [Solide IDE](https://github.com/solide-project/solide). After cloning the repositories, follow the steps below:

```bash
cd solide-ide
npm install

npm run build # check if everything is working

npm run dev # start the development server
```

```bash
cd solide-dapp
npm install

npm run build # check if everything is working

npm run dev # start the development server
```

### Configuration
In the solide-ide repository, navigate to the lib/utils.ts file and change SOLIDE_URL to the instance where the Solide IDE is running (https:localhost:{port}). This step is crucial for configuring the local instance properly
. The reason for running a **local instance of the IDE** is to not it'll be faster to compile and easy for compiling and loading the contracts and developments that involves the IDE. 

### Resources

- [Documentation](https://solide-project.github.io/docs)