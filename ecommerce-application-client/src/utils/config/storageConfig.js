export const getItem=(key)=>{
    const value=localStorage.getItem(key);
    if(!key){
        return;
    }

    return value;
}

export const setItem=(key,value)=>{
    if(!key || !value){
        alert('No key or value found');
    }else{
        localStorage.setItem(key,value);
    }
    
}

export const clear=()=>{
    localStorage.clear();
}

export const removeItem=(key)=>{
    if(!key){
        alert('No key found');
    }else{
        localStorage.removeItem(key);
    }
}