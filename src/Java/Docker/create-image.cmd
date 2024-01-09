docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kr1-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kr1-java/app ../../..
