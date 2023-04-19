

# PactJS projeto

Nodejs + Jest projeto configuração contract tests PactJS
<br>
<br>

## Executar via CLI

- Abra o terminal na pasta root

- Install dependências
`npm install`

- Executar client/consumer que (vai gerar o contrato):
`npm run test:consumer`

- Executar provider/server que (vai verificar o contrato e validar):
`npm run test:provider`

- Executar o provider server  `http://localhost:8081`  (Client API/Service):
`npm run provider`

- Executar o consumer server `http://localhost:8080` (Client API/Service):
`npm run consumer`

- Publish the contracts:
`npm run publish:contract`


# Pontos importantes para configurar

1. Configurar as permissoes do proxy para o pact server local connection.

2. O arquivo root deve ter nome curto, e as pastas de testes não podem ultrapassar 80 char ao total

4. Configurar promisse para o response



# Pact Broker Configuration
Sem docker

1. Instale o Ruby
2. Instale o bundle

3. Clone o projeto pact-foundation: git clone git@github.com:pact-foundation/pact_broker.git && cd pact_broker/example
 
4. Agora execute bundle install e execute um comando de pacote para iniciar a interface do servidor web Ruby na porta 8080. 
bundle install
bundle exec rackup -p 8080
 
O corretor de pactos agora pode ser visualizado localmente em localhost:8080/groups/Example App/. 

Com Docker
Use Docker-compose para subir o postgresql e baixar a imagem do pactfoundation, conforme o script a seguir:

```yaml
version: "3"
 
services:
 pact-broker-postgres:
   image: postgres
   healthcheck:
     test: psql postgres --command "select 1" -U postgres
   ports:
     - "5432:5432"
   volumes:
     - postgres-volume:/var/lib/postgresql/data
   environment:
     POSTGRES_USER: postgres
     POSTGRES_PASSWORD: password
     POSTGRES_DB: postgres
    
 
 pact-broker:
   image: pactfoundation/pact-broker
   ports:
     - "9292:9292"
   depends_on:
     - pact-broker-postgres
   environment:
     PACT_BROKER_DATABASE_USERNAME: postgres
     PACT_BROKER_DATABASE_PASSWORD: password
     PACT_BROKER_DATABASE_HOST: pact-broker-postgres
     PACT_BROKER_DATABASE_NAME: postgres
     PACT_BROKER_LOG_LEVEL: DEBUG
    
volumes:
 postgres-volume:
```

**Verifique se a porta 9292 está livre e suba o servidor com `docker-compose up`.**


