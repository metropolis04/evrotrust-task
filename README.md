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
git clone https://gitlab.aiidatapro.net/news-caster-group/newscaster-next-editor.git
cd newscaster-next-editor
```

2. Install project dependencies:
```bash
npm ci
```

## Set up the environment variables
#### Create a .env file in the project root and add the necessary environment variables.
#### MUST HAVE variables are:
```bash
API_HOST=https://newsletter-gate-dev.aiidatapro.net
NODE_TLS_REJECT_UNAUTHORIZED=0
API_SIGNAL_AI_HOST=https://signalai-test.aiidatapro.net
SIGNAL_AI_API_KEY=4f3b6e4c2da3d892f1790c2db02d
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