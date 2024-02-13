i=0
for file in ./images/*.jpg
do 
    mv "$file" "./images/image${i}.jpg"
    i=$((i+1))
done 