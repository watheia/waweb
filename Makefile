.PHONY: clean test lint build

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(PATH)

all: node_modules

node_modules: package.json
	yarn install
	touch $@

clean:
	yarn clean:icons
	rm -rf dist **/.cache/

clean_all:
	$(MAKE) clean
	$(MAKE) clean_node_modules

clean_node_modules:
	rm -rf node_modules
	rm -rf **/node_modules

# for now doesn't have deploy since v3 doesn't have a place for docs and stuff yet
ci: gatekeeper compendium screenplay
	echo "Job Complete."


gatekeeper:
	echo "---> Building production PWA...."
	yarn nx run pwa:build:production --verbose
	echo "---> Done."

compendium: depgraph
	echo "---> Building production docs...."
	# yarn nx run docs:build:production --verbose
	echo "---> Done."

screenplay:
	echo "---> Running automated checks...."
	# yarn nx run docs:build:production --verbose
	echo "---> Done."

depgraph:
	node_modules/.bin/depcruise apps\
		--config .dependency-cruiser.js \
		--output-type dot \
		--progress \
		| dot -T svg > dependencygraph.svg

# publish: build
# 	yarn publish

# publish-nightly: build
# 	yarn publish:nightly

# build:
# 	parcel build packages/@react-{spectrum,aria,stately}/*/ packages/@internationalized/*/ --no-minify

# website:
# 	yarn build:docs --public-url /reactspectrum/$$(git rev-parse HEAD)/docs --dist-dir dist/$$(git rev-parse HEAD)/docs

# website-production:
# 	node scripts/buildWebsite.js
# 	cp packages/dev/docs/pages/robots.txt dist/production/docs/robots.txt
# 	node scripts/brotli.js
