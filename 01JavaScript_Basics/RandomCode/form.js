console.log("form work!")

function generateForm(){
    const div = document.createElement('div');
    const inputField = document.createElement('input');
    const lable = document.querySelector('input').value;
    const type = document.querySelector('select').value;
    console.log( lable);
    console.log(type);
    inputField.setAttribute('type', `${type}`);
    inputField.setAttribute('placeholder',`${lable}` );
    div.appendChild(inputField)
    document.querySelector('#preview').appendChild(div);

}
