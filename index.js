if(localStorage.getItem('token' == null)){
    alert('Faça seu login para acessar essa página.')
    window.location.href = "login.html"
}
function sair(){
    localStorage.removeItem('token')
    window.location.href = "login.html"
}