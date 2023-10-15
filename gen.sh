#!/usr/bin/env bash
adduce -c config/pages/index -n index.html -o docs
adduce -c config/pages/changelog -n changelog.html -o docs
adduce -c config/pages/demo -n demo.html -o docs
adduce -c config/pages/download -n download.html -o docs
adduce -c config/pages/404 -n 404.html -o docs

adduce feed publish v1_0
adduce feed publish v54_0
cp -r feed/export/. docs/changelog

cp -r config/global/style docs/
cp -r config/global/assets docs/
