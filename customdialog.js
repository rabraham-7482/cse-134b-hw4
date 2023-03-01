export function createDialog(type){
    let dialog_element = document.createElement('dialog');
    dialog_element.setAttribute('id', `${type}_dialog`);
    switch(type){
        case 'alert':
            dialog_element.innerHTML = `
                <p>Alert Pressed!</p>
                <button id="alert_ok_button">OK</button>
            `;
            break;
        case 'confirm':
            dialog_element.innerHTML = `
                <p>Do you confirm this?</p>
                <button id="confirm_cancel_button">Cancel</button>
                <button id="confirm_ok_button">OK</button>
            `;
            break;
        case 'prompt':
            dialog_element.innerHTML = `
                <p>What is your name?</p>
                <input type="text" name="name_input" id="name_input"/>
                <button id="prompt_cancel_button">Cancel</button>
                <button id="prompt_ok_button">OK</button>
            `;
            break;
    }
    document.body.appendChild(dialog_element);
}
export function showDialog(dialog){
    dialog.open = true;
    
}
export function closeDialog(dialog){
    dialog.open = false;
}
