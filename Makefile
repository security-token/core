RELEASE_VERSION=v$(shell cat package.json | jq --raw-output .version)

# Path to this plugin
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_DIR="./domain"

golang:
	@protoc \
	--go_out=${OUT_DIR} \
	--go_opt=paths=source_relative \
	--go-grpc_out=${OUT_DIR} \
	--go-grpc_opt=paths=source_relative \
	schema/*.proto


js:
	@protoc \
	--plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
	--js_out="import_style=commonjs,binary:${OUT_DIR}" \
	--ts_out="${OUT_DIR}" \
	schema/*.proto

schema: golang js

extract:
	@bash scripts/extract.sh

interfaces: extract
	@bash scripts/interfaces.sh

publish:
	@npm publish

add:
	@git add .

commit:
	@git commit -m "release ${RELEASE_VERSION}"

push:
	@git push origin master

createtag:
	@git tag ${RELEASE_VERSION}

pushtag:
	@git push origin ${RELEASE_VERSION}

release: publish add commit push createtag pushtag