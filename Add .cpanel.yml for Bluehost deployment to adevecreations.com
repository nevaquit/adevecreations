---
deployment:
  tasks:
      - export DEPLOYPATH=/home2/xgmztfmy/adevecreations.com/
          - /bin/cp -R client/dist/* $DEPLOYPATH
