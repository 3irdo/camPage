window.onload = () => {

  const rForm = document.getElementById("register_form");
  const users = JSON.parse(localStorage.getItem("users")) || [];
  rForm.addEventListener("submit", function (e) {
    console.log("hola");
    e.preventDefault();
    
    const usr = document.getElementById("username").value;
    const email = document.getElementById("email").value.toLowerCase();
    const pwrd = document.getElementById("password").value;
    const userRegistered = users.find((user) => user.email === email);
    if (userRegistered) {
      return alert("El correo ya está registrado");
    }

    users.push({ name: usr, email: email, password: pwrd });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro exitoso");
  });

//   login -------------------------

const loginform = document.getElementById('login-form');

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById("l-email").value.toLowerCase();
    const pwrd = document.getElementById("l-password").value;
    const validUsr = users.find(user => user.email === email && user.password === pwrd)
    if(!validUsr){
        return alert('Verifica tus datos')
    } 
        alert(`Bienvenido ${validUsr.name}`)
        localStorage.setItem('login_success', validUsr.name)
    
});

};

//  localStorage.clear();



