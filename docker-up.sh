#!/bin/bash

docker run -d --name database -e POSTGRES_USER=force -e POSTGRES_PASSWORD=team7rocks -p5433:5432 postgres:10
