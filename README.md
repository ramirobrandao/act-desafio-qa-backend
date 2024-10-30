## Desafio técnico de automação com Cypress Backend 💛

Automação de testes para API com Cypress e JavaScript, seguindo boas práticas de Page Object Model (POM).

Foi configurada uma pipeline (GitHub Actions) de integração contínua CI/CD que executa automaticamente todos os testes do projeto quando é realizado um push na branch main ou quando um pull request é aberto.

Foi implementado a geração de relatórios ricos com gráficos e imagens utilizando a biblioteca do Mochawesome. 🚀

Fiz o uso da biblioteca Faker para gerar dados fictícios e aleatórios, aumentando a robustez dos testes.

E também Cy-api qie facilita com validações robustas de status de resposta, corpo da resposta e headers, de maneira similar que teria com ferramentas como Postman ou Insomnia.

O projeto foi organizado usando estruturas com cenários de sucesso e erro validando o fluxo de usuários da API ServeRest: Cadastrar usuário, Buscar usuário, Deletar usuário e Editar usuário.

## Documentação dos testes 

- Acessar o link: [Documentação ServeRest - BDD](https://github.com/ramirobrandao/act-desafio-qa-backend/blob/main/cypress/docs/Documenta%C3%A7%C3%A3o%20ServeRest%20-%20BDD.pdf)  

## Documentação da API ServeRest

- Acessar o link: [Swagger ServeRest](https://serverest.dev/)

## Pré-requisitos

- NodeJS;
- Git;
- IDE (Visual Studio Code);
- Cypress 
- Material Icon Theme (Optional Plugin VSCode).

## Instalação
- Acessar o link [https://nodejs.org/](https://nodejs.org/), baixar e instalar o NodeJS versão 18 ou superior;
- Ao baixar o NodeJS, o gerenciador de pacotes NPM virá junto. 

Para verificar a instalação do NodeJS e do NPM, abrir o Prompt de Comando e digitar:

Para verificar a instalação do NodeJS (deve retornar a versão algo como v18.20.3):

``node -v `` 

Para verificar a instalação do gerenciador de pacoted NPM (deve retornar a versão algo como v10.7.0):

``npm -v ``
- Acessar o link [https://git-scm.com/downloads](https://git-scm.com/downloads), baixar e instalar o Git/GitBash;
 - No Windows Explorer, navegar até a pasta onde deseja clonar o projeto, abrir o GitBash (botão direito -> *Git Bash Here*) e digitar:

``git clone https://github.com/ramirobrandao/vox-desafio-qa.git ``
 - Para que o Cypress funcione, é necessário que ele seja instalado atraves do *npm install* na pasta raiz do projeto
``npm install``

## Execução dos testes

- No terminal do VSCode deve ser executado o seguinte comando para que o Cypress seja executado em modo headless:

`` npx cypress open``