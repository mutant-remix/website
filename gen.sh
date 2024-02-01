#!/usr/bin/env bash

# Generate pages
adduce -c config/pages/index -n index.html -o docs
adduce -c config/pages/demo -n demo.html -o docs
adduce -c config/pages/404 -n 404.html -o docs

# Copy required material
cp -r config/global/style docs/
cp -r config/global/assets docs/
