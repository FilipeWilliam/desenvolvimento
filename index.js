// Encontrar o botão na página
const button = document.querySelector('button');
const inputNome = document.querySelector('[name="nome"]');

// Adicionar escuta do evento de 'click'
button.addEventListener('click', function () {
	const novoUsuario = {
		nome: inputNome.value,
		tipo: 2, 
		email: "administrador@ifc.com.br", 
		senha: "456"
	}

	criarUsuario(novoUsuario)
})

function criarUsuario(dadoUsuario) {
	fetch("http://localhost:3000/users", {
		method: "POST",
		body: JSON.stringify(dadoUsuario)
	});
}
