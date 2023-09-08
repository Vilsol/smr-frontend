#!/bin/bash

set -m

bun /app/build/node/index.js &

/yeet serve local -p /app/build/static/ --bot-proxy http://localhost:3000 --port 80 --log trace --404-index

fg %1
