#!/usr/bin/env bash

eval "$(ssh-agent -s)" #start the ssh agent
echo "$DEPLOY_KEY" > deploy_key.pem
chmod 600 deploy_key.pem # this key should have push access
ssh-add deploy_key.pem
git remote add deploy $REPO_URI
git push deploy master
