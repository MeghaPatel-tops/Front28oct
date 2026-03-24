console.log("external script ");

let product = {
    pname:"sugar",
    price:"35",
    desciption:"Madhur sugar"
}

console.log(product);

product['weigth']="1kg";

console.log(product);

delete product.weigth;

console.log(product);


function getKey(){
    let keyName = prompt("Enter key");
    let valName=prompt("Enter value");
    let bag={
        [keyName]:valName
    };

    console.log(bag);
    
}

for(key in product){
    let str = `${key} = ${product[key]} <br>`
    document.write(str)
}

console.log(product.pname);

//===================copy & ref================
let user ={name:"megha"};

let userobj= user;

userobj['sname']="patel";

console.log(user);

console.log(user === userobj);

const sub={
    sname:"java"
}

sub['sname']='python'

console.log(sub);

//cloing object
let clone ={};
for(key in user){
    clone[key]=user[key];
}

console.log("clone",clone);

clone.sname="patil";
console.log("clone",clone);

console.log(user);


user.printMsg = function(){
    console.log(`welcome ${this.name}`);
    
}

user.printMsg();






