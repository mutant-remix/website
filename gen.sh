#!/usr/bin/env bash

# Generate standard pages
pages=(
	"input/pages/index index.html"
	"input/pages/downloads downloads.html"
	"input/pages/releases releases.html"
	"input/pages/404 404.html"
)

for page_config in "${pages[@]}"; do
	page="${page_config%% *}"
	output="${page_config#* }"
	adduce -c "$page" -n "$output" -o docs
done

# Copy global styles and assets
cp -r input/global/styles docs/
cp -r input/global/assets docs/
cp -r input/global/scripts docs/
