
let length=8

const passwordGenerator=()=>{
    let allow_Number = document.getElementById('num');
    let allow_char = document.getElementById('char')

    let MyPass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys"
    if(allow_Number.checked){
        str+= "0123456789"
    }
    if(allow_char.checked){
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

const copyPassword=()=>{
    var text = document.getElementById('showPass');
    text.select()
    navigator.clipboard.writeText(text.value);
}


