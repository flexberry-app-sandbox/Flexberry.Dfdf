docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dfdf-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dfdf-java/app ../../..
