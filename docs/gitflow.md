# git flow (as coder)

## short

- changes => `branches` (ideally with a good unique name to describe its content)
- `commits` => prefix with their relative path and a short unique name (f.e. a react update => `frontend/react/ // react-v17-upgrade`)

### special prefixe-situations

- for new roots/substuff you just define the parent-root (f.e. you create a vuejs project in frontend => `frontend/`-prefix, example commit `frontend/ // created vuejs`)
- for changes at configs (f.e. `.gitignore` in the root) use the prefix `config/`, **this does NOT include subtree-specific configs** (f.e. code/frontend/react/.eslintrc would NOT be prefixed with config)

## long

1. check out the master (and pull again to be sure to be on the current state)
1. make changes
1. checkout a new branch with some good unique name
1. commit your changes, prefix the commit-head with the relative path to the projectpart it's from and a unique name (add a commit-body if necessary)
1. push upstream
1. create pull request with any reviewer of your choice

# example:

git checkout master<br />
git pull<br />
// coding stuff...<br />
git checkout -b react-v17-upgrade<br />
git add .<br />
git commit -m "frontend/react/ // react-v17-upgrade \nwe use v17 now whoo!!"<br />
git push -u origin react-v17-upgrade<br />
git checkout master<br />
// making pull request on github<br />

# example commit headers:

- frontend/react/ // updated version to v17
- algorithms/ // added backtracking
- algorithms/graph // fixed the bug within the node-class
- docs/ // fixed a typo in gitflow.md

# git flow (as reviewer)

1. control the code `semantically`
1. control the code `functionally`
1. `comment` on fixable spots/improvable spots
1. finally check if the `commits` are clean before merging (rule-syntax? only 1 commit per important change?)
1. **delete the branch after merging**
