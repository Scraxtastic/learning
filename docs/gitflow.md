# git flow (as coder)

## short

changes => `branches` (ideally with a good unique name to describe its content)
`commits` => prefix with their relative path and a short unique name (f.e. a react update => `frontend/react/react-v17-upgrade`)

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
git commit -m "frontend/react/react-v17-upgrade \nwe use v17 now whoo!!"<br />
git push -u origin react-v17-upgrade<br />
git checkout master<br />
// making pull request on github<br />

# git flow (as reviewer)

1. control the code `semantically`
1. control the code `functionally`
1. `comment` on fixable spots/improvable spots
1. finally check if the `commits` are clean before merging
1. **delete the branch after merging**
