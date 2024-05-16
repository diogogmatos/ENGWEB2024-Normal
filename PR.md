# ENGWEB2024-Normal

De modo a converter o dataset fornecido para um formato JSON, mais facilmente interpretado pelo MongoDB, foi utilizado o script python "csvToJson.py", disponível na raíz do projeto. Este script faz uso da biblioteca "csv" do python para ler o ficheiro e fazer a sua conversão para dicionários, convertendo-os depois para JSON e escrevendo-os no ficheiro "contratos2024.json".

Para a base de dados, utilizei docker correndo os seguintes comandos:

`docker run -v ~/LEI:/LEI -d -p 27017:27017 --name mongodb mongo:latest`

`docker exec -it mongodb mongoimport --db contratos --collection contratos --file LEI/3ano/2sem/EngWeb/teste/ENGWEB2024-Normal/contratos2024.json --jsonArray`

