.PHONY: setup clean test lint build

SHELL := /bin/bash
PATH := ./node_modules/.bin:$(HOME)/bin:$(PATH)

clean:
	yarn clean:icons
	rm -rf dist public src/dist

setup:
	npm i -g yarn @teambit/bvm
	bvm install
	bit config set analytics_reporting false
	bit init --harmony
	bit import
	bit compile
	bit install

build:
	nx run-many --all --target build --prod --verbose

test:
	nx run-many --all --target test

start-bit:
	bit ui-build
	bit start --dev --log info
