docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dfdf/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t dfdf/app ../..
