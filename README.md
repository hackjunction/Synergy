# Synergy
Junction 2017 platform

[![Greenkeeper badge](https://badges.greenkeeper.io/hackjunction/Synergy.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/hackjunction/Synergy.svg?branch=master)](https://travis-ci.org/hackjunction/Synergy)

## Development

1. Install *yarn* by running
```
npm install -g yarn
```

2. Install dependencies by running (run always when `yarn.lock` file has changed when you pull)
```
yarn
```

3. Add `.env` to get your local configuration in place (Ask for the keys). *Use `src/lib/config.js` to import configuration to other script files!*

4. Launch the internal server
```
yarn start
```
and
```
yarn watch
```
And it should be running on localhost:3000


## Design

Website Prototype (Updating constantly):
https://projects.invisionapp.com/share/WRC7ILATV#/screens/239458262_Junction_Front

Color palette:
https://coolors.co/232323-fbfbfb-ec008b-5abecf-ef4637

Junction Brand book:
https://docs.google.com/presentation/d/1IZQWn9Qdxa3jouFwNKVXYSbyGQtCY2c5kTjKWZ_hGA8/edit?usp=sharing

## Back end side

We will use the wordpress API
You can launch the docker with `docker-compose up -d`
You can stop it with `docker-compose down`
Removes the containers, default network, and the Wordpress database `docker-compose down --volumes`

## Wordpress configuration

All content added as a post, tagged to specific categories; Track, Partner, Challenge etc.
Plugins in use:
  Advanced Custom Fields (4.4.1)
  ACF to WP API (1.4.0)

In advanced custom fields all of these post types have relevant fields added

Front page section: text content in the post
  Background (image)
  Image
Track:
  description
  image
  challenges
  Main partners
  Secondary partners
Partner:
  image
Challenge:
  description (text)
  image
  criteria (text)
  prize (text)
  partners
  links to company specifications (text)
Keynote:
  image
  info
  link


## Troubleshooting

If your wordpress doesn't display json add `?rest_route=/wp/v2/posts` at the end of your url
Change the permalink setting in the wp-admin to something like Post name and it should now work.

## Links

#### Back
The docker and wordpress:
https://docs.docker.com/compose/wordpress/#bring-up-wordpress-in-a-web-browser

#### Front
Cartoon which explain redux:
https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6

Good usage of wordpress API:
https://medium.freecodecamp.com/how-to-build-react-apps-on-top-of-the-wordpress-rest-api-bcc632808025

Chrome plugin for redux:
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
