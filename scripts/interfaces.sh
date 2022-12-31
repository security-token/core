for abi in node_modules/security-token-build/contracts/*.abi 
do
    npx abi-types-generator $abi --output=./domain/interfaces/contracts --provider=ethers_v5
done