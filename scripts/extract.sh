for file in node_modules/security-token-build/contracts/*.json 
do
    cat $file | jq .abi > $file.abi
done