#!/bin/sh

echo "Link ${EPP_ENVIRONMENT} config"

CONFIG="/usr/local/d8o/nodepp/lib/epp-config-${EPP_ENVIRONMENT}.json"

if [ -e $CONFIG ]; then
    ln -sf $CONFIG  /usr/local/d8o/nodepp/lib/epp-config.json
fi


npm start
