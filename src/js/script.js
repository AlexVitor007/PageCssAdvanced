 // Pega o botão pelo ID
/*   document.getElementById('meuBotao').addEventListener('click', function () {
    alert('Página funcionando corretamente');
  }); */
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("ativo");
  });
});


  document.getElementById('meuBotao').addEventListener('click', function () {
  if (confirm('A página está funcionando?')) {
    alert('Seja Bem Vindo!!');
  } else {
    alert('Recarrega que ela volta :)');
  }
});

