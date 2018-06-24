var UserProfile = (function() {
    var cpfUser = "";
    var carrinhoCompras = [];

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

    return {
        getCpf: getCpf,
        setCpf: setCpf,
        getCarrinho: getCarrinho,
        setCarrinho: setCarrinho
    }

})();

export default UserProfile;