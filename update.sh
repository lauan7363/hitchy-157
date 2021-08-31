#!bin/bash
pkg update -y
pkg upgrade -y

CYAN="\033[1;36m"
YELLOW="\033[1;33m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

echo $YELLOW"Você tem certeza que deseja atualizar ? [s/n]"
read -p "> " opts

if [ $opts = "s" ]; then

clear
echo $YELLOW"Atualizando , aguarde..."
git clone https://github.com/ianmsfvenom/Brizas-bot > /dev/null 2> /dev/null

cd Brizas-bot
cp -r * ..
cd ..
rm -rf Brizas-bot
npm i

clear
echo $GREEN"Atualizado com sucesso!!"

elif [ $opts = "n"]; then
    clear
    echo $RED"Atualização abortada"
    exit
fi