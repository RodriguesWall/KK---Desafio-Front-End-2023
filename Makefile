build-prod: ## Start the prod server
	@bash ./scripts/build-dash-prod.sh

install: ## Install the dependencies
	@bash ./scripts/install.sh

start: ## Start project
	@bash ./scripts/start.sh