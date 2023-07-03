

<script>
    export default {
        mounted() {
  
      const cadastrarBtn = document.getElementById("botao_cadastrar");
      cadastrarBtn.addEventListener("click", this.cadastrarUsuario);
  },
  methods:{
cadastrarUsuario(event) {
  event.preventDefault();
  const iusername = document.querySelector("#userName");
  const iusernick = document.querySelector("#userNick");
  const ititulo = document.querySelector("#userTitulo");
  const iemail = document.querySelector('#userEmail');
  const iuserpass = document.querySelector("#userPass");
  const iusercpf = document.querySelector("#userCpf");
  const iuserdate = document.querySelector("#userDate");
  const iusercell = document.querySelector("#userCell");
  const iuserpai = document.querySelector("#userPai");
  const iusermae = document.querySelector("#userMae");


  console.log(iusername.value);
  console.log(iusernick.value);
  console.log(ititulo.value);
  console.log(iemail.value);
  console.log(iuserpass.value);
  console.log(iusercpf.value);
  console.log(iuserdate.value);
  console.log(iusercell.value);
  console.log(iusercell.value);
  console.log(iuserpai.value);
  console.log(iusermae.value);

  fetch("http://localhost:8080/api/usuario", {
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify({
    "nome": iusername.value,
    "usuario": iusernick.value,
    "titulo_eleitor": ititulo.value,
    "email": iemail.value,
    "senha": iuserpass.value,
    "cpf": iusercpf.value,
    "data_nascimento": iuserdate.value,
    "celular": iusercell.value,
    "nome_pai": iuserpai.value,
    "nome_mae": iusermae.value
  }) 
})
.then(response => {
  if (response.ok) {
    // Cadastro bem-sucedido
    console.log("Usuário cadastrado com sucesso!");
    // Redirecionar ou realizar outras ações necessárias após o cadastro
  } else {
    // Exibir mensagem de erro
    throw new Error("Erro ao cadastrar usuário. Código de resposta: " + response.status);
  }
})
.catch(error => {
  console.log(error);
});

}}
 }
</script>
<template>
    <div>
     <article class="tudo">

<br>
<h2 class="textcad"> Cadastro</h2>

<form>

    <div class="esp">

        <div class="colunas">

            <div class="coluna1">
                <input id="userName"  type="text" placeholder="Nome">
                <input id="userNick" type="text" placeholder="Usuario">
                <input id="userTitulo" type="text" placeholder="Titulo">
                <input id="userEmail" type="email" placeholder="Email">
                <input id="userPass" type="password" placeholder="Senha">
               
            </div>



            <div class="coluna2">
                <input id="userCpf" type="text" placeholder="CPF">
                <input type="text"  id="userDate" placeholder="Data de nascimento" onfocus="(this.type='date')" onblur="(this.type='text')">
                <input id="userCell" type="text" placeholder="Telefone">
                <input id="userMae" type="text" placeholder="Nome Mãe">
                <input id="userPai" type="text" placeholder="Nome Pai">


            </div>


        </div>
      
        <div>

           
        </div>
        <div class="botao">
            <input type="button" value="Cadastrar" id="botao_cadastrar">
             <a href="login.html"><input class="voltar" type="button" value="Voltar"></a>
        </div>

    </div>

</form>

</article>
</div>

</template>


<style scoped>
@import '../assets/login.css';

</style>