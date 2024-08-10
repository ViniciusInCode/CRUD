const readlineSync = require('readline-sync');

// Array para armazenar os dados do usuário
let userDataArray = [];

// Função para criar dados
function createUser() {

    const Nome = readlineSync.question('Nome: ');
    const email = readlineSync.questionEMail('Email: ');
    const CPF = readlineSync.question('CPF: ');
    const Tel = readlineSync.question('Telefone: ');

    const userData = {
        Nome: Nome,
        email: email,
        CPF: CPF,
        Tel: Tel
    };

    userDataArray.push(userData);
    console.log('Usuario adicionado com sucesso!');
}

// Função para ler dados
function readUsers() {
    if (userDataArray.length === 0) {
        console.log('Nenhum usuario encontrado.');
    } else {
        console.log('Lista de usuarios:');
        console.table(userDataArray);
    }
}

// Função para atualizar dados
function updateUser() {
    const index = readlineSync.questionInt('Digite o numero do usuario que deseja atualizar: ');

    if (index >= 0 && index < userDataArray.length) {
        const name = readlineSync.question('Novo nome: ');
        const email = readlineSync.questionEMail('Novo Email: ');
        const CPF = readlineSync.question('Novo CPF: ');
        const phone = readlineSync.question('Novo telefone: ');

        userDataArray[index] = { name, email, CPF, phone };
        console.log('Usuario atualizado com sucesso!');
    } else {
        console.log('Usuario nao encontrado.');
    }
}

// Função para deletar dados
function deleteUser() {
    const index = readlineSync.questionInt('Digite o numero do usuario que deseja deletar: ');

    if (index >= 0 && index < userDataArray.length) {
        userDataArray.splice(index, 1);
        console.log('Usuario deletado com sucesso!');
    } else {
        console.log('Usuario nao encontrado.');
    }
}

// Função principal (main) com menu e do-while loop
function main() {
    let choice;

    do {
        console.log('\nEscolha a :');
        console.log('[1] Criar usuario');
        console.log('[2] Ler usuários');
        console.log('[3] Atualizar usuario');
        console.log('[4] Deletar usuario');
        console.log('[5] Sair');

        choice = readlineSync.questionInt("Insira uma opcao: ")

        switch (choice) {
            case 1:
                createUser();
                break;
            case 2:
                readUsers();
                break;
            case 3:
                updateUser();
                break;
            case 4:
                deleteUser();
                break;
            case 5:
                console.log('Saindo...');
                break;
            default:
                console.log('Opcao invalida. Tente novamente.');
        }
    } while (choice !== 5);
}

// Executar a função principal
main();



