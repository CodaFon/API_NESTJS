#!/bin/sh
nb_file=$(ls ./database/migrations | wc -l);
nb_file=$(echo "$nb_file-1" | bc) ;

for ((i=0; i<=$nb_file; i++ ))
do
	yarn migration:revert;
done 