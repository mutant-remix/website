#!/usr/bin/env bash

#!/usr/bin/env bash

# Generate standard pages
pages=(
    "config/pages/index index.html"
    "config/pages/downloads downloads.html"
    "config/pages/releases releases.html"
	"config/pages/404 404.html"
)

for page_config in "${pages[@]}"; do
    page="${page_config%% *}"
    output="${page_config#* }"
    adduce -c "$page" -n "$output" -o docs
done

# Copy global styles and assets
cp -r config/global/styles docs/
cp -r config/global/assets docs/
cp -r config/global/scripts docs/
