let allow_Number = false;
let allow_char = false
let length=8

const passwordGenerator=()=>{
    let MyPass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys"
    if(allow_Number==true){
        str+= "0123456789"
    }
    if(allow_char==true){
        str+= "@!~$#%^&(}[)[}/"
    }

    //let FinalPass = ""
    
    for(i=0; i<=length; i++){
        let chars = Math.floor((Math.random()*str.length+1))
        MyPass+= str.charAt(chars)
    }
    document.getElementById('showPass').value=MyPass;
}



let changeLength=(val)=>{
    
    document.getElementById('lenDisplay').innerText = `Length[${val}]`
    length = val
    passwordGenerator()
}



const allowNum=()=>{
    let allow = document.getElementById('num')
    if(allow.checked){
        allow_Number = true;
    }
    passwordGenerator()
}


const allowChar=()=>{
    let allow = document.getElementById('char')
    if(allow.checked){
        allow_char = true;
    }
    passwordGenerator()
}


const copyPassword=()=>{
    var text = document.getElementById('showPass');
    text.select()
    navigator.clipboard.writeText(text.value);
}


