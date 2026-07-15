export function checkLogin(){
    const username = JSON.parse(localStorage.getItem("username"))
    console.log(">>>", username);
    const usr = username ? username : false;
    return usr;
}