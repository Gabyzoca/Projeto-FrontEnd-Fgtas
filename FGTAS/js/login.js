// Mostrar ou ocultar a senha
document.addEventListener('DOMContentLoaded', function () {
  const toggleSenha = document.getElementById('toggleSenha');
  const senhaInput = document.getElementById('senha');
  const iconSenha = document.getElementById('iconSenha');

  toggleSenha.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
      senhaInput.type = 'text';
      iconSenha.classList.remove('bi-eye');
      iconSenha.classList.add('bi-eye-slash');
    } else {
      senhaInput.type = 'password';
      iconSenha.classList.remove('bi-eye-slash');
      iconSenha.classList.add('bi-eye');
    }
  });

  // Validação e simulação de login
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    alert('Login realizado com sucesso!');
    console.log('Redirecionando...');
    window.location.href = 'index.html';
  });
});
