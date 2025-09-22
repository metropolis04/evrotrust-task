# Evrotrust-task auth app

### Description
This is a Next.js ( Node.js server ) auth application that allows login and send reset password request. 

# Installation

### System dependencies
- Node.js 22.14.0
- NPM 10.9.0
- macOS, Windows (including WSL), and Linux are supported.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/metropolis04/evrotrust-task.git
cd evrotrust-task
```

2. Install project dependencies:
```bash
npm install
```

## Set up the environment variables
#### Create a .env file in the project root and add the necessary environment variables.
#### MUST HAVE variables are:
```bash
TOKEN_SECRET=VQdlegHXBWCLOvq6aDxy
HOST=http://localhost:3000
```

### Build application
```bash
npm run build
```
#### ./.next is the directory where you can find your builded app.

### Run application
```bash
npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Development server

Run the development server:

```bash
npm run dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.