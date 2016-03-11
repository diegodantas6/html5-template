$(document).ready(function() {

    $('#nome').focus();

    $('#formDados').parsley();

});

function teste() {
    $('#formModal').modal('show');
}

function showNotify() {

    $('#formModal').modal('hide')

    createNotify('info', 'Funcionando SHOW!!!\nTeste com quebra linha');

}

function createNotify(tipo, mensagem) {
    new PNotify({
        title: 'Bootstrap Icon',
        text: mensagem,
        type: tipo,
        styling: 'bootstrap3',
        delay: 3000,
        buttons: {
            closer: false,
            sticker: false
        }
    });
}

function createConfirm(mensagem, yesFunc, noFunc) {
    $.confirm({
        title: false,
        keyboardEnabled: true,
        content: mensagem,
        confirmButton: "Sim",
        cancelButton: "Cancelar",
        confirmButtonClass: "btn-primary",
        cancelButtonClass: "btn-danger",
        confirm: yesFunc,
        cancel: noFunc
    });            
}

function cancelar() {

    var yesFunc = function () {

        $('#formDados').trigger('reset');

        $('#formDados').parsley().reset();

    }

    var noFunc = function() {
    }

    createConfirm('Tem certeza?', yesFunc, noFunc);

}

window.Parsley.addAsyncValidator('teste', function() {

    var valor = this.$element.val();

    var millisecondsToWait = 2000;

    setTimeout(function() {
        return valor === 'teste';
    }, millisecondsToWait);

});

window.Parsley.addValidator('teste2', {
    validateString : function(value) {
        return value === 'teste';
    }
});        
