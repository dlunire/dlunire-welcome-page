main:
	bun dev

build:
	bun run build

compiler:
	./builders.sh

publish:
	dlunire publish ./dist/ /srv/aplicaciones/libs/main