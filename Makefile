DC = docker-compose
YAML_PATH = docker-compose.yml

all: up

up:
	@$(DC) -f $(YAML_PATH) up --build

down:
	@$(DC) down

restart:
	@$(DC) restart

stop:
	@$(DC) stop

stats:
	@docker stats

clean:
	@docker image prune -f
	@docker container prune -f
	@docker volume prune -f
	@docker network prune -f

fclean:
	@docker system prune -a

re: fclean all

.PHONY: up down stop stats restart fclean all re
