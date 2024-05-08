class Validator {
    constructor (cpf) {
        this.cpf = cpf;
    }
    result = document.querySelector('.result-off');
    cpfPartial = this.cpf.slice(0, -2);


    openResult() {
        if (this.result.style.display === 'block') return;
        this.result.style.display = 'block';
        setTimeout(e=> {
            this.result.style.display = 'none';
        }, 4000);
    };


    
}

const valid = new Validator('06957387127');


document.addEventListener('click', 
e => {
    const el = e.target;
    const btn = el.classList.contains('btn')
    if (btn) valid.openResult();
})

console.log(cpfPartial);

