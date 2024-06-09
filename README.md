# Projeto de Automação - Luma Store QA

Este projeto é parte do processo seletivo da InfinityBase para a automação da Luma Store.

Dados da aplicação: https://magento.softwaretestingboard.com/

## Descrição

Este projeto contém testes automatizados para a aplicação Luma Store, utilizando o framework Cypress para a automação de testes e a geração de relatórios Mochawesome para análise dos resultados. Além disso, são utilizado arquivos Javacript para agrupamento de funções e melhor manutenção do código. 

## Tecnologia(s) utilizada(s) e Framework(s) utilizado(s)

- Cypress 
- Javascript 

## Motivação da utilização do Framework 

O Cypress oferece uma experiência de automação de testes moderna, intuitiva e eficiente, destacando-se pelo seu foco em testes end-to-end e arquitetura única. Além disso, ele permite a realização de uma variedade de testes, incluindo testes de API, atendendo aos requisitos do projeto.

Além do resumo acima, segue o detalhamento da motivação: 

- Facilidade de uso: A sintaxe limpa e intuitiva do Cypress facilita a escrita e manutenção dos testes, mesmo para iniciantes em automação de testes.

- Interface interativa: A interface gráfica interativa do Cypress oferece uma visualização em tempo real da execução dos testes, facilitando a depuração e compreensão do fluxo de teste.

- Velocidade na exeução: A arquitetura sem dependência de Selenium e a execução assíncrona do Cypress resultam em uma execução rápida dos testes, otimizando o tempo de desenvolvimento.

- Suporte integrado: O Cypress oferece suporte nativo para testes end-to-end, mas também pode ser usado para realizar outros tipos de testes, como testes de API, atendendo às necessidades do projeto.

- Clareza na obtenção do erro: O Cypress fornece mensagens de erro claras e precisas, facilitando a identificação e resolução de problemas durante o desenvolvimento dos testes.

- Relatórios detalhados e possibilidade de dashboards através do próprio cypress: O Cypress gera relatórios detalhados dos resultados dos testes, permitindo a análise de métricas importantes. Além disso, é possível criar dashboards personalizados diretamente no Cypress.

- Documentação clara e objetiva:  A documentação do Cypress é abrangente, clara e objetiva, fornecendo orientações detalhadas para utilização e resolução de problemas. 

Por fim, o Cypress está em constante evolução em conjunto com o mercado, simplificando a execução de ações e oferecendo suporte em comunidades online relacionadas ao framework, o que contribui para uma experiência de automação de testes eficaz e confiável.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em seu sistema antes de prosseguir. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório para o seu ambiente local:

```bash
git clone https://github.com/Jorgesousa4/luma_store_QA.git
```

2. Navegue até o diretório do projeto

```bash
cd automation-luma_store_qa
```

3. Instale as dependências do projeto utilizando o npm

```bash
npm install

```

## Execução dos Testes 

Para executar os testes, utilize o seguinte comando 

```bash
node index.js 
```
Ou, utilize essa segunda opção para gerar o relatório de testes 

```bash
npx cypress run --reporter mochawesome
```

Isso iniciará a execução dos testes automatizados utilizando o Cypress.

## Geração de Relatórios

Após a execução dos testes, um relatório Mochawesome será gerado automaticamente na pasta cypress/reports/index.html. 

Para abrir o relatório basta navegar até a pasta reports e clicar duas vezes com o botão esquerdo. 

Este projeto é um desafio da [Coodesh](https://coodesh.com/).