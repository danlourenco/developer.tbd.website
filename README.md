# TBD Developer Site

This is a monorepo powered by [pnpm](https://pnpm.io/) that includes a documentation site, tutorials and examples. This repository allows you to conveniently manage multiple projects within a single repository.

## Prerequisites

Before you begin, ensure that you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 18.16.0 or later)
- [pnpm](https://pnpm.io/) (version 7.29.1 or later)

## Installation

To install `pnpm` globally on your local machine, follow these steps:

1. Open a terminal or command prompt.
2. Run the following command:

```shell
npm install -g pnpm
```

3. Wait for the installation process to complete.

> Note: If you already have `pnpm` installed globally, you can skip this step.

## Getting Started

To get started with the monorepo and run the available scripts, follow these instructions:

1. Clone the repository:

```shell
git clone https://github.com/TBD54566975/developer.tbd.website.git
```

2. Navigate to the project directory:

```shell
cd developer.tbd.website
```

3. Install project dependencies using `pnpm`:

```shell
pnpm install
```

4. Once the installation is complete, you are ready to run the available scripts.

## Scripts

The following scripts are available for running specific tasks within the monorepo:

- `start:site`: Runs the docs site.
- `start:todo-tutorial`: Starts the todo app tutorial.

To execute a script, use the following command format:

```shell
pnpm run [script-name]
```

For example, to start the docs site, run:

```shell
pnpm run start:site
```

To start the todo app tutorial, run:

```shell
pnpm run start:todo-tutorial
```

> Note: Before executing any script, make sure you have installed project dependencies by running `pnpm install` as mentioned in the previous step.

## Contributing

If you wish to contribute to this project, please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
