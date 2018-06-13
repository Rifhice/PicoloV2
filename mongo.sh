#!/bin/bash

# usage: cd herokuapp && mongolab

MONGOLAB_URI=`heroku config:get MONGOLAB_URI`
$(echo $MONGOLAB_URI | sed -E 's%^mongodb://([^:]+):([^@]+)@(.*)$%mongo -u \1 -p \2 \3%g')
