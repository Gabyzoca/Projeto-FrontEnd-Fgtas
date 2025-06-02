    document.addEventListener('DOMContentLoaded', function () {
    // Mostrar/ocultar senha
    const toggleSenha = document.querySelector('.btn-toggle-senha');
    const senhaInput = document.getElementById('password');
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

    // Validação e modal
    const form = document.querySelector('form');
    const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
    const confirmBtn = document.getElementById('confirmRedirect');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nome = document.getElementById('firstName').value.trim();
      const email = document.getElementById('email').value.trim();
      const senha = document.getElementById('password').value.trim();
      const cargo = document.querySelector('select[name="cargo"]').value;

      if (!nome || !email || !senha || cargo === 'Cargo') {
        alert('Por favor, preencha todos os campos e selecione um cargo!');
        return;
      }

      // Exibe o modal
      modal.show();
    });

    confirmBtn.addEventListener('click', function () {
      modal.hide();
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 500);
    });
  });

