
var UserProfile = (function() {
    var cpfUser = "";
    var carrinhoCompras = [];
    var admin = false;
    var nomeCompleto = "";
    var email = "";
    var endereco = "";

    var getNomeCompleto = function () {
        return nomeCompleto;
    };

    var getEmail = function () {
        return email;
    };

    var getEndereco = function () {
        return endereco;
    };

    var setNomeCompleto = function (nomeUser) {
        nomeCompleto = nomeUser;
    };

    var setEmail = function (emailUser) {
        email = emailUser;
    };

    var setEndereco = function (enderecoUser) {
        endereco = enderecoUser;
    }

    var getCpf = function() {
        return cpfUser;
    };

    var getCarrinho = function() {
        return carrinhoCompras;
    };

    var setCarrinho = function(carrinho) {
        carrinhoCompras = carrinho;
    }

    var setCpf = function(cpf) {
        cpfUser = cpf;
    };

    var setAdmin = function(userAdmin){
        admin = userAdmin;
    };

    var getAdmin = function(){
        return admin;
    }

    return {
        getCpf: getCpf,
        setCpf: setCpf,
        getCarrinho: getCarrinho,
        setCarrinho: setCarrinho,
        getAdmin: getAdmin,
        setAdmin: setAdmin,
        setEndereco: setEndereco,
        getEndereco: getEndereco,
        setEmail: setEmail,
        getEmail: getEmail,
        setNomeCompleto: setNomeCompleto,
        getNomeCompleto: getNomeCompleto
    }

})();


export default UserProfile;