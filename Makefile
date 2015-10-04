deploy:
	rsync -az --exclude .git --progress ./ deploy@trunk-studio.com:/home/deploy/kdh-official-website
