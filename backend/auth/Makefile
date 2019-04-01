.PHONY: build clean deploy

build:
	env GOOS=linux go build -ldflags="-s -w" -o bin/login login/main.go
	env GOOS=linux go build -ldflags="-s -w" -o bin/world world/main.go

clean:
	rm -rf ./bin

deploy: clean build
	source .env && sls deploy --verbose
