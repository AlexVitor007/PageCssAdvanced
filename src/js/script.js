 // Pega o botão pelo ID
/*   document.getElementById('meuBotao').addEventListener('click', function () {
    alert('Página funcionando corretamente');
  }); */

  document.getElementById('meuBotao').addEventListener('click', function () {
  if (confirm('A página está funcionando?')) {
    alert('Seja Bem Vindo!!');
  } else {
    alert('Recarrega que ela volta :)');
  }
});

