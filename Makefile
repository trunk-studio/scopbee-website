deploy:
	rsync -az --exclude .git --progress ./ deploy@trunk-studio.com:/home/deploy/scopbee-website

restart-server:
	ssh deploy@trunk-studio.com "cd scopbee-website; docker-compose restart"
