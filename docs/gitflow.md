# git flow

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

git checkout master
git pull
// coding stuff...
git checkout -b react-v17-upgrade
git add .
git commit -m "frontend/react/react-v17-upgrade \nwe use v17 now whoo!!"
git push -u origin react-v17-upgrade
git checkout master
// making pull request on github
