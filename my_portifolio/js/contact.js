const container_list_header_contact = document.getElementById("container_list_header_contact")
const container_list_footer_contact = document.getElementById("container_list_footer_contact")
const container_list_header_two_contact = document.getElementById("container_list_header_two_contact")

const hamburguer_menu_contact = document.getElementById("hamburguer_menu_contact")
const list_full_two_contact = document.getElementById("list_full_two_contact")

const form_contact = document.getElementById("form_contact");
const Nome = document.getElementById("Nome");
const email = document.getElementById("email");
const num_telephone = document.getElementById("num_telephone");
const message = document.getElementById("message");

num_telephone.addEventListener('keyup', () => {
    let apenasNumeros = num_telephone.value.replace(/\D/g, '');

    if (apenasNumeros.length <= 2) {
        num_telephone.value = apenasNumeros;
    } else if (apenasNumeros.length <= 7) {
        num_telephone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 7);
    } else {
        num_telephone.value = '(' + apenasNumeros.slice(0, 2) + ') ' + apenasNumeros.slice(2, 7) + '-' + apenasNumeros.slice(7);
    }
});

form_contact.addEventListener("submit", (event)=> {
    event.preventDefault();

    if (Nome.value.length < 3) return ErrorCampo(Nome, 'span_nome', 'O nome tem que ter no mínimo 3 caracteres!');
    if (!isEmailValue(email.value)) return ErrorCampo(email, 'span_email', 'O email informado é invalido!')
    if (num_telephone.value.length > 15 || num_telephone.value.length < 15) return ErrorCampo(num_telephone, 'span_telephone', 'Este numero de telefone é invalido!')
    if (message.value === '') return ErrorCampo(message, 'span_mensagem', 'Preencha este campo com alguma mensagem!')

})

document.addEventListener("DOMContentLoaded", ()=> {
    Active(hamburguer_menu_contact, list_full_two_contact);

    create_link_header(container_list_header_contact, obj_menu_header);
    create_link_header(container_list_footer_contact, obj_menu_header);
    create_link_header(container_list_header_two_contact, obj_menu_header)
})