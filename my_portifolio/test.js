const input = 'João victor'

const alternatives = {
    "Carlos": "Ele é viado",
    "João victor": "CAlvo",
    "João": "Lerdo",
    "Johão": "Vagabundo",
    "fabio": "ladrão"
    
}

const result = alternatives[input] ?? 'Não identificado';

console.log(result)
