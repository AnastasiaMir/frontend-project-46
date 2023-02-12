install:
	npm ci
gendiff -h:
	node bin/gendiff.js

publish:
	npm publish --dry-run
lint:
	npx eslint .

test-coverage:
	npx test -- --coverage --coverageProvider=v8
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage