const body = document.querySelector("body");
body.style = "background:#093545;"
let h1 = document.createElement("h1");
h1.innerText ="Sign In"
h1.setAttribute("style","color:white;text-align:center;margin-top:100px;font-size:40pt;");
console.log(h1);
const box = document.querySelector(".box")
box.setAttribute("style","width:500px;margin:0px auto;")
box.append(h1)     
let p = document.createElement("p");
p.innerHTML = "Sign in and start managing your condidotes!<br>"
p.setAttribute("style","text-align:center;font-size:15pt;");
console.log(p)
h1.append(p)
let input = document.createElement("input");
input.setAttribute("type","email");
input.setAttribute("placeholder","Login");
input.setAttribute("style","margin-top:30px; background:#093545;color:white;padding-left:30px;font-size:13pt; width:250px;height:30px;border-radius:10px;");
p.append(input)
let input2 = document.createElement("input");
input2.setAttribute("type","password");
input2.setAttribute("placeholder","Password");
input2.setAttribute("style","margin-top:30px; background:#093545;color:white;padding-left:30px;font-size:13pt; width:250px;height:30px;border-radius:10px;");
p.append(input2)
let input3 = document.createElement("input");
input3.setAttribute("type","submit");
input3.setAttribute("value","Login");
input3.setAttribute("style","margin-top:30px; background:#179857;color:white;font-size:15pt; width:300px;height:50px;border-radius:10px;");
p.append(input3)



