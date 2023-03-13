const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    idInput.value = '';
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    valueInput.value='';

    // added local storage
    if(id && value){
    // localStorage.setItem(id, value)
    localStorage.setItem(id, JSON.stringify([value]))
    }

}

const clearStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;
    localStorage.clear(id, value)
    // addToLocalStorage()
}