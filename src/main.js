
let apiUser = "http://localhost:8000/user";
 export function login(e){
e.preventDefault();
getUser(handleLogin);
}

function getUser(callback){
    fetch(apiUser).then(function(res){
        return res.json().then(callback);
    });
}

function handleLogin(data){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    const user = data.find(user => user.username === username && user.password === password);
    if(user){
        alert("Đăng nhập thành công !");
                
    }else{
        alert("Tài khoản hoặc mật khẩu sai !!!")
    }
}

export function signup(){
    handleCrateForm();
    
}
function createUser(data){
    fetch(apiUser,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }).then(function(res){
        return res.json();
    });
    if(data){
        alert("Đăng kí thành công ! Mời bạn đăng nhập");
    }
}
function handleCrateForm(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let nameuser = document.getElementById("nameUser");
    let address = document.getElementById("address");
    let phone = document.getElementById("telphone");
    let avatar = document.getElementById("avatar");

    let user = {
        username : username.value,
        password : password.value,
        nameuser : nameuser.value,
        address : address.value,
        phone : phone.value,
        avatar : avatar.value
    };
    createUser(user);
}