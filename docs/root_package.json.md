since there'll be / there are several package.jsons in the subtree we should define what the root one is for: scripts <br /><br />

via `yarn --cwd ...` (... = your stuff) we can use yarn from the root to execute subfolder scripts f.e. <br />
therefore we should also define some script-name-rule for casual scripts:

syntaxes should always be prefixed with their verb of action followed by a colon:

- `init:...` (to install node_modules of a specific project part)
- `start:...` (to start a specific project part)
- `test:...` (to test a specific project part)
- `build: ...` (to build a specific project part)
- ...

the ... part should be a path relative to the `code/` root!, as example a test of sorting algorithms:

- `test:algorithms/sorting`

another rule should be grouping of similar actions: <br />
group all starts, group all tests, group all builds etc, if you bundle multiple actions use **two underscores** after the verb <br /><br />

example script (**imaginary one**):

```jsonc
// in the package.json of the project root
"scripts": {
  "init:algorithms/sorting": "yarn --cwd code/algorithms/sorting",
  "init:algorithms/graph": "yarn --cwd code/algorithms/graph",
  "init__all": "yarn init:algorithms/sorting && yarn init:algorithms/graph",
  "start:frontend/react": "yarn --cwd code/frontend/react start",
  "start:backend/express-rest": "yarn --cwd code/backend/express-rest start",
  "test:algorithms/graph": "yarn --cwd code/algorithms/graph test"
}

```
