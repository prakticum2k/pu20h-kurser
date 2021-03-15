console.log('hej')

function formHandler() {
  const email = document.getElementById('exampleInputEmail1').value
  const pwd = document.getElementById('exampleInputPassword1').value
  const check = document.getElementById('exampleCheck1').value

  localStorage.email = email

  output = `
    <div class="alert alert-success" role="alert">
      <ul>
        <li>E-post: ${email}</li>
        <li>Ditt löseord: ${pwd}</li>
        <li>checkbox: ${check}</li>
        </ul>
    </div>`
    document.querySelector('.output').innerHTML = output
}

if(localStorage.email !== undefined) {
    document.getElementById('exampleInputEmail1').value = localStorage.email
}

//ta bort enskillda localStorage poster:
localStorage.removeItem('email')
//ta bort all localStorage med:
localStorage.clear()