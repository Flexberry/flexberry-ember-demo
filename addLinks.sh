#!/bin/sh
cd app/templates
ifs="$IFS"
for f in *-e.hbs
do
  echo $f
  let n=${#f}-6
  f2=${f:0:$n}.hbs
  rm -f $f2
  ln -sf $f $f2
done
