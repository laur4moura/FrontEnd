### **JSON SERVER**



&#x09;Facilitar o desenvolvimento do Front-End, pra você não ter que esperar o programador Back-End desenvolver a API.

&#x09;**Cria uma API Falsa (API Rest)**

&#x09;-db.json.



**COMO INSTALAR**

&#x09;Abrir o terminal, pode ser do VSCode ou não e rodar o seguinte comando:

&#x09;**npm install -g json-server.**

(com a flag/parâmetro) -g você instala o json-server de forma global, para qualquer projeto que você precisa usar depois.

Criar o arequivo db.json na raiz do seu projeto (no VSCode) - Este arquivo serve como banco de dados do json Server ele mesmo controla esse arquivo a cada requisição.



**EXEMPLO DE ESTRUTURA:**

{

&#x20;  "Rota/EndPoint":\[

&#x20;  	{"id": 1,"dado-qualquer":"valor-qualquer"}

&#x20;   ]

}



**EXEMPLO FICTÍCIO:**

{

&#x20;  "usuario":\[

&#x20;     {"id" :1, "nome" : "Laura Anacleto", : "email" : "lala@gmail.com", "idade" : 17},

&#x20;     {"id" :2, "nome" : "Larissa Moura", : "email" : "lala2@mail.com", "idade" : 22}

&#x20;  ]

}



&#x09;No VSCode devemos abrir o terminal e alterar para o terminal do git bash (testar o do windows?).

&#x09;Rodar o comando json-sever --watch db.json

