#!/bin/sh
nb_file=$(ls ./database/migrations | wc -l);

for ((i=0; i<=$nb_file; i++ ))
do
	yarn migration:revert;
done 