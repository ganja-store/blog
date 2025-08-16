#!/bin/bash

OUTPUT_FILENAME="./table_of_contents.md"

echo -e "# Table of Contents\n" > $OUTPUT_FILENAME

for filename in ./contents/*.md; do
	filename=$(basename $filename)
	topic="${filename%.*}"
	# echo "- $topic" >> $OUTPUT_FILENAME;
	echo "- [$topic](/blog/#$topic)" >> $OUTPUT_FILENAME;
done

echo -e "\n<hr />" >> $OUTPUT_FILENAME;
echo -e "Last updated at $(date '+%d/%m/%Y %H:%M:%S')" >> $OUTPUT_FILENAME;
