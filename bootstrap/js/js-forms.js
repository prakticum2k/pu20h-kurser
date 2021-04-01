console.log('hej')

//Funktion som ersätter teckensträng till stjärnor
const stringToStars = (str) => {
  let pwdLength = str.length
  let pwdStars = ''
  for (let i = 0; i < pwdLength; i++) {
    pwdStars += '*'
  }
  return pwdStars
}

//Funktion som kollar om checkbox är checkad och returnerar text
const checkBoxChecker = (val) => {
  let checkResult

  if (val.checked) {
    checkResult = 'Checkboxen checkad'
  } else {
    checkResult = 'Checkboxen inte checkad'
  }
  return checkResult
}

function formHandler() {
  const email = document.getElementById('exampleInputEmail1').value
  const pwd = document.getElementById('exampleInputPassword1').value
  const checkValue = document.getElementById('exampleCheck1')
//Gör hash av passworden med jshashes:
  const pwdHash = new Hashes.SHA256().hex(pwd)
  console.log(pwdHash)

  localStorage.email = email

  output = `
    <div class="alert alert-success" role="alert">
      <ul>
        <li>E-post: ${email}</li>
        <li>Ditt löseord: ${stringToStars(pwd)}</li>
        <li>checkbox: ${checkBoxChecker(checkValue)}</li>
        </ul>
    </div>`

  document.querySelector('.output').innerHTML = output
}

//om localstorage.email inte finns...
if (localStorage.email !== undefined) {
  // ...sparar vi den
  document.getElementById('exampleInputEmail1').value = localStorage.email
}

//ta bort enskillda localStorage poster:
//localStorage.removeItem('email')
//ta bort all localStorage med:
function clearLS() {
  localStorage.clear()
}
