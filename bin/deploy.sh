#!/bin/bash
if [[ $1 = "prod" ]] && [[ $2 = "down" || $2 = "up" ]]; then
    cd ..
    fileEnv="docker-compose.${1}.yaml"
    downOrUp=$2
    echo "██╗    ██╗ █████╗ ██╗   ██╗███████╗    ███████╗████████╗ ██████╗ ██████╗ ███████╗";
    echo "██║    ██║██╔══██╗██║   ██║██╔════╝    ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝";
    echo "██║ █╗ ██║███████║██║   ██║█████╗      ███████╗   ██║   ██║   ██║██████╔╝█████╗  ";
    echo "██║███╗██║██╔══██║╚██╗ ██╔╝██╔══╝      ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝  ";
    echo "╚███╔███╔╝██║  ██║ ╚████╔╝ ███████╗    ███████║   ██║   ╚██████╔╝██║  ██║███████╗";
    echo " ╚══╝╚══╝ ╚═╝  ╚═╝  ╚═══╝  ╚══════╝    ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝";
    echo "                                                                                 ";
    echo ""
    echo "Running docker-compose -f docker-compose.yaml -f $fileEnv $downOrUp"
    echo ""
    echo "WAVE STORE PRODUCTION running on nginx server ports:8080"
    docker compose -f docker-compose.yaml -f $fileEnv $downOrUp
else
    echo 'Need to follow format ./deploy prod|dev down|up'
fi