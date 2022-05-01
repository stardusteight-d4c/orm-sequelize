# API ORM - Sistema de Controle de uma Escola de Inglês 

<a href="https://nodejs.org/en/" target="_blank">![NodeJS](https://img.shields.io/badge/Node.js-white?style=flat&logo=node.js&logoColor=black)</a>
<a href="https://www.mysql.com/" target="_blank">![MySQL](https://img.shields.io/badge/mysql-white.svg?style=flat&logo=mysql&logoColor=black)</a>
<a href="https://sequelize.org/" target="_blank">![Sequelize](https://img.shields.io/badge/Sequelize-white?style=flat&logo=Sequelize&logoColor=black)</a>
<a href="https://www.postman.com/" target="_blank">![Postman](https://img.shields.io/badge/Postman-white?style=flat&logo=postman&logoColor=black)</a>

### ORM (Mapeamento objeto-relacional)
![ORM](img/orm.png)
<p>Object-Relational Mapping (ORM), é uma técnica para aproximar o paradigma de desenvolvimento de aplicações orientadas a objetos ao paradigma do banco de dados relacional. O uso da técnica de mapeamento objeto-relacional é realizado através de um mapeador objeto-relacional que geralmente uma biblioteca ou framework que ajuda no mapeamento e uso do banco de dados. Esta técnica ajuda você a consultar e manipular dados de bancos de dados usando um paradigma orientado a objetos. Atualmente os desenvolvedores adotam o uso dos ORMs por vários motivos como:</p>
<li>Temos que escrever um modelo de dados apenas em um lugar, é mais fácil atualizar, manter e reutilizar o código;
<li>Força você a escrever código MVC , o que torna seu código mais limpo;
<li>Não há necessidade de escrever consultas SQL;
<li>Não há necessidade de alterações no nível do banco de dados com frequência;
<li>A maior parte do trabalho é automatizada.

<p>Quando estamos trabalhando com aplicações orientadas a objetos que utilizam banco de dados relacionais para armazenamento de informações, temos um problema chamado impedância objeto-relacional devido às diferenças entre os 2 paradigmas.</p>

<p>O banco de dados relacional trabalha com tabelas e relações entre elas para representar modelos da vida real. Dentro das tabelas temos várias colunas e a unidade que temos para representação no modelo relacional é uma linha. O paradigma orientado a objetos possui um modo um pouco diferente de trabalhar. Nele nós temos diversos elementos como classes, propriedades, visibilidade, herança e interfaces. A unidade quando falamos de orientação a objetos é o objeto que representa algo do mundo real, seja abstrato ou concreto</p>

<p>As principais dificuldades que essas diferenças entre paradigmas causa:</p>
<li>Representação dos dados e do modelo, já que as estruturas são distintas;
<li>Mapeamento entre os tipos de dados da linguagem de programação e do banco de dados;
<li>Modelo de integridade relacional do banco relacional.

### ORM
<p>Pensando nos problemas descritos acima, o ORM define uma técnica para realizar a conciliação entre os 2 modelos. Uma das partes centrais é através do mapeamento de linhas para objetos:</p>

![ORM](img/resolvendo-impedancia-de-dados.png)

<p>As bibliotecas ou frameworks ORM definem o modo como os dados serão mapeados entre os ambientes, como serão acessados e gravados. Isso diminui o tempo de desenvolvimento, uma vez que não é necessário desenvolver toda essa parte. Outra vantagem está na adaptação de novos membros na equipe, como muitos projetos comerciais utilizam a mesma ferramenta, é possível encontrar membros que já estão acostumados com o padrão de trabalho.</p>

### O Padrão Data Mapper
<p>Nesse padrão a classe que representa a tabela do banco de dados não deve conhecer os recursos necessário para realizar as transações com banco de dados: inserir, atualizar e apagar informações. Esses recursos ficam em uma classe própria do ORM, garantindo que as classes que representam a tabela tenha uma única responsabilidade.</p>

<p>Na prática, para a maioria dos ORMs do mercado que implementam o padrão Data Mapper, independente da linguagem, vamos ter um código muito parecido com abaixo:</p>

```
class PessoaController {
  static async pegarTodasAsPessoas(req, res){
    try {
      const todasAsPessoas = await database.Pessoas.findAll()
      return res.status(200).json(todasAsPessoas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  static async pegarUmaPessoa(req, res) {
    const { id } = req.params
    try {
      const umaPessoa = await database.Pessoas.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umaPessoa)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
```

### <a href="https://sequelize.org/" target="_blank">Sequelize</a>
![Sequelize](img/sequelize.png)
<p>É um ORM Node.js baseado em promessas bem conhecido, que pode ser usado com MySQL, MariaDB, SQLite e Microsoft SQL Server e Postgres. O Sequelize fornece um grande conjunto de recursos para desenvolvedores e essa biblioteca ficou mais famosa por causa desses recursos. Ele permite criar, buscar, alterar e remover dados do banco de dados utilizando métodos JS, além de permitir a modificação da estrutura das tabelas, com isso temos muita facilidade tanto na criação, população e migração de banco de dados. Contém uma rica documentação, portanto, se você estiver procurando por um ORM estável para o seu projeto, o sequelize é uma boa escolha.</p>

### MVC (Model-View-Controller)
<p>O MVC é uma sigla do termo em inglês Model (modelo) View (visão) e Controller (Controle) que facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.</p>

<p>O que se passa por trás de uma tela de login de um software? Em frações de segundos a página é capaz de absorver as informações que foram digitadas no campo de email e senha, realizar a validação e entregar uma resposta positiva ou negativa. Esse processo só se torna possível quando existe um padrão de arquitetura de software adequado. Embora exista vários que podem ser utilizados, o MVC é o mais conhecido e empregado entre os desenvolvedores profissionais.</p>

<p>Quando falamos sobre o MVC, cada uma das camadas apresenta geralmente as seguintes responsabilidades:</p>
<li><strong>Model</strong> A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação.
<li><strong>View</strong> A view é responsável pela interface que será apresentada, mostrando as informações do model para o usuário.
<li><strong>Controller</strong> É a camada de controle, responsável por ligar o model e a view, fazendo com que os models possam ser repassados para as views e vice-versa. 

![MVC](img/diagrama-mvc.png)


```
.
├── api
│   ├── config
│   │   └── config.json
│   ├── controllers 
│   │   ├── NivelController.js
│   │   ├── PessoaController.js
│   │   └── TurmaController.js
│   ├── index.js
│   ├── migrations
│   │   ├── 20200505131114-create-pessoas.js
│   │   ├── 20200526194618-create-niveis.js
│   │   ├── 20200526194804-create-turmas.js
│   │   └── 20200526194858-create-matriculas.js
│   ├── models 
│   │   ├── index.js
│   │   ├── matriculas.js
│   │   ├── niveis.js
│   │   ├── pessoas.js
│   │   └── turmas.js
│   ├── routes
│   │   ├── index.js
│   │   ├── niveisRoute.js
│   │   ├── pessoasRoute.js
│   │   └── turmasRoute.js
│   └── seeders
│       ├── 20200505161755-demo-pessoa.js
│       ├── 20200601170039-demo-nivel.js
│       ├── 20200601170107-demo-turmas.js
│       └── 20200601170115-demo-matriculas.js
├── node_modules
├── .sequelizerc
├── package.json
└── package-lock.json

923 directories, 5307 files

```
<br>

Fontes:

<a href="https://www.treinaweb.com.br/blog/o-que-e-orm" target="_blank">TreinaWeb</a> -
<a href="https://www.lewagon.com/pt-BR/blog/o-que-e-padrao-mvc" target="_blank">le wagon</a> -
<a href="https://dev.to/jhonywalkeer/orm-as-melhores-bibliotecas-para-javascript-2pc0" target="_blank">Dev</a>

