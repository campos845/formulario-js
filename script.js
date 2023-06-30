function formulario() {
    const nomeInput = document.getElementById('nome');
    const idadeInput = document.getElementById('idade');
    const pesoInput = document.getElementById('peso');
    const sexoInput = document.getElementById('sexo');
  
    const dadosElement = document.getElementById('dados');
    const nome = nomeInput.value;
    const idade = idadeInput.value;
    const peso = pesoInput.value;
    const sexo = sexoInput.value;
  
    dadosElement.innerHTML = `
      <strong>Nome:</strong> ${nome}<br>
      <strong>Idade:</strong> ${idade}<br>
      <strong>Peso:</strong> ${peso}<br>
      <strong>Sexo:</strong> ${sexo}`;
  }
  
  // Obtém o formulário e adiciona um listener para o evento de envio
  const formElement = document.getElementById('form');
  formElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    formulario(); // Chama a função para exibir os dados
  });
  