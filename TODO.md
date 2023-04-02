### 1. PRIORITY

### 2. PRIORITY

### 3. PRIORITY

-   Clean up repository

// "tasksRunnerOptions": {
// "default": {
// "runner": "nx/tasks-runners/default",
// "options": {
// "cacheableOperations": ["build", "lint", "test", "e2e"]
// }
// }
// },
// "namedInputs": {
// "sharedGlobals": [],
// "default": ["{projectRoot}/**/*", "sharedGlobals"],
// "production": [
// "default",
// "!{projectRoot}/tsconfig.spec.json",
// "!{projectRoot}/\*_/_.spec.[jt]s",
// "!{projectRoot}/karma.conf.js"
// ]
// },
// "targetDefaults": {
// "build": {
// "dependsOn": ["^build"],
// "inputs": ["production", "^production"]
// },
// "test": {
// "inputs": ["default", "^production", "{workspaceRoot}/karma.conf.js"]
// }
// }
