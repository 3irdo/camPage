window.onload = () => {
// --------------------------validación de bootstrap-------------
    (function () {
        'use strict'
      
        // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
        var forms = document.querySelectorAll('.needs-validation')
      
        // Bucle sobre ellos y evitar el envío
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('click', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
      
              form.classList.add('was-validated')
            }, false)
          })
      })()


    // registro --------------------------------------

  const rBtn = document.getElementById("r_btn");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  rBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const rName = document.getElementById("rName").value;
    const rEmail = document.getElementById("rEmail").value.toLowerCase();
    const rPass = document.getElementById("rPass").value;

    const userRegistered = users.find((user) => user.email === rEmail);
    if (userRegistered) {
      return alert("Este correo ya está registrado");
    }

    users.push({ name: rName, email: rEmail, password: rPass });
    localStorage.setItem("users", JSON.stringify(users));
    alert("registro exitoso");
  });

// -----------------------login---------------------------------

  const lBtn = document.getElementById("l_btn");

  lBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const lEmail = document.getElementById("lEmail").value.toLowerCase();
    const lPass = document.getElementById("lPass").value;
    const validUser = users.find(
      (user) => user.email === lEmail && user.password === lPass
    );
    if (!validUser) {
      alert("Verifica tus datos");
    } else {
      alert(`Bienvenido ${validUser.name}`);
      localStorage.setItem("login_success", validUser.name);
    }
  });
};

// localStorage.clear();