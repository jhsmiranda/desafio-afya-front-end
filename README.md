<h1 align="center">
<img src="https://i.imgur.com/nwfkVsb.png" title="Clínica Pomarola" />
</h1>

<h3 align="center">
  Pomalabs Web
</h3>

<p align="center">
  <a href="#sobre o projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#iniciando">Iniciando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#funcionalidades">Funcionalidades</a>
</p>

## 👨🏻‍💻 Sobre o projeto

- <p style="color: red;">A PomaLabs teve como desafio desenvolver um sistema para possibilitar o cadastro de clientes, atendimentos e prontuários dos pacientes de um consultório.</p>

Para ver a **api**, clique aqui: [PomaLabs api](https://github.com/fdutrac/desafio-afya-api)</br>

### 💻 Desenvolvedores
- [José Henrique da Silva Miranda](https://github.com/jhsmiranda)
- [Gustavo Lening Godoy de Oliveira](https://github.com/gustavolening)
- [Fábio Henrique Dutra Costa](https://github.com/fdutrac)
- [Filipe Galdino Dantas](https://github.com/flipdantas)

## 🚀 Tecnologias

Tecnologias que utilizamos para desenvolver este web client:

- [ReactJS](https://reactjs.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [Styled Components](https://styled-components.com/)
- [Polished](https://github.com/styled-components/polished)
- [Axios](https://github.com/axios/axios)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## 💻 Iniciando

### Pré-requisitos

- A [API](https://github.com/fdutrac/desafio-afya-api) do projeto deve estar em execução.

**Clone o projeto e acesse a pasta**

```bash
$ git clone https://github.com/jhsmiranda/desafio-afya-front-end.git && cd desafio-afya-front-end
```

**Siga as etapas abaixo**

```bash
# Instale as dependências
$ yarn

# Inicie o client
$ yarn start
```
## ⚙️ Funcionalidades
Funcionalidades que o sistema oferece:
- Cadastro e Login de administrador
- Cadastro de Clientes e Especialistas
- Tela de Clientes e Especialistas com:
	- Pesquisa e listagem 
	- Botão de detalhes com opção de edição dos dados do usuário selecionado
- Tela de Atendimentos
	- Pesquisa e Listagem
	- Busca de atendimentos por Status, Paciente, Especialista, Data de agendamento ou de atendimento
- Criação de Agendamentos
- Tela de Prontuários
	- Pesquisa e Listagem
	- Emissão de prontuários após atendimento realizado
	
## 🖥️🖱️ Telas 

Nesta seção serão exibidas as telas do sistema e sua navegabilidade.

### 🔑️ Menu: Login e cadastro
<p align="center">
<img src="https://i.imgur.com/JeljKp6l.png" title="tela de login e cadastro" />
</p>
Nesta tela inicial é possível cadastrar um usuário administrador e, caso tenha sucesso, será redirecionado para a tela de login, para acesso ao sistema. 



### 👥️ Tela de Clientes
<p align="center">
<img src="https://i.imgur.com/6ynsJeIl.png" title="listagem de clientes" />
</p>
Após o login, o usuário será redirecionado para a tela acima, onde haverá a possibilidade de pesquisa de clientes e cadastro de novos clientes. Caso seja necessário sair, basta selecionar o botão "sair" no canto inferior esquerdo, voltando à tela de login/cadastro. Ao selecionar a opção "detalhes", será disponibilizado o modal de informações do cliente, conforme a imagem abaixo: 
<p align="center">
<img src="https://i.imgur.com/kOizPQ8l.png" title="modal dos clientes" />
</p>
Caso o usuário escolha editar o cliente, o mesmo será redirecionado para a tela abaixo, onde terá as opções de edição para o cliente selecionado (os dados anteriores já estarão preenchidos, bastando apenas editar o dado necessário)
<p align="center">
<img src="https://i.imgur.com/aUbmjw5l.png" title="edição de clientes" />
</p>
Caso o usuário queira cadastrar um novo cliente, basta clicar na opção "Cadastrar cliente" na tela principal de clientes, sendo exibida a tela abaixo para preenchimento com as informações do cliente e cadastro do mesmo.
<p align="center">
<img src="https://i.imgur.com/lZW27rVl.png" title="source: imgur.com" />
</p>


### 👩‍⚕️️ Tela de Especialistas
<p align="center">
<img src="https://i.imgur.com/eA5UfQUl.png" title="tela dos especialistas" />
</p>
Ao selecionar a opção "Especialista" na barra de navegação no lado esquerdo da tela, o usuário será direcionado à tela acima, que terá o mesmo padrão que a tela de clientes: Pesquisa, cadastro, modal com informações ao selecionar detalhes e edição.

Ao selecionar detalhes de um especialista será exibido um modal como o da tela abaixo:
<p align="center">
<img src="https://i.imgur.com/8MEdn4il.png" title="modal dos especialistas" />
</p>
Ao clicar no botão "Cadastrar especialista", o usuário será direcionado à tela abaixo, onde poderá cadastrar um novo especialista.
<p align="center">
<img src="https://i.imgur.com/8PUT36Cl.png" title="source: imgur.com" />
</p>
Exemplo de edição de dados de um especialista ao selecionar "Editar especialista" no modal (mesma regra de edição do cliente):
<p align="center">
<img src="https://i.imgur.com/s3FDzCUl.png" title="tela de edição de especialistas" />
</p>

### 📅️⚕️ Tela de Atendimentos
<p align="center">
<img src="https://i.imgur.com/kGctZdAl.png" title="tela de atendimentos" />
</p>
Ao selecionar a opção "Atendimento" na barra de navegação no lado esquerdo da tela, o usuário será direcionado à tela de atendimento acima, onde poderá agendar atendimentos. A tela é composta de três colunas. Na primeira o usuário deve inserir o nome do cliente que terá a consulta, a especialidade e o especialista que realizará a consulta. A opção "Especialista" só será habilitada caso seja selecionada uma especialidade e a seleção de data só será habilitada ao selecionar o especialista. Após isso os horários disponíveis serão disponibilizados para seleção.

### 📝️⚕️ Tela de prontuários
<p align="center">
<img src="https://i.imgur.com/yNfKAA6l.png" title="tela de prontuários" />
</p>
A tela de prontuários disponibiliza os prontuários dos atendimento que já foram realizados. A tela consiste de uma barra de pesquisa de prontuários e a listagem dos mesmos abaixo. 
