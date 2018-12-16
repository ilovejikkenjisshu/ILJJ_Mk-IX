#!/bin/bash

TAG=proelbtn/iljj-mk-ix

source .env
docker container run -it --rm -e "ILJJMKIX_TOKEN=${ILJJMKIX_TOKEN}" ${TAG}


