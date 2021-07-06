var bt = document.querySelectorAll('section button');

function createTextarea(){
    var textarea = document.createElement('textarea');
    textarea.style.opacity = '0';
    textarea.setAttribute('id', 'copy');
    document.body.appendChild(textarea);
}

function copyText(){
    var text = this.parentElement.innerText;
    var textCopied = document.getElementById('copy');
    textCopied.value = text;
    textCopied.select();
    document.execCommand('copy');
}
  
bt.forEach((x) => {
    x.addEventListener('click', copyText);
});

window.onload = function(){
    createTextarea();
};