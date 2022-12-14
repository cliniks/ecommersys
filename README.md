#If it’s to a personal Git account that you are about to push:

$ ssh-add -D #removes all ssh entries from the ssh-agent
$ ssh-add ~/.ssh/id_rsa # Adds the relevant ssh key

# or

$ ssh-add -D
$ ssh-add ~/.ssh/id_rsa_ikiradev
