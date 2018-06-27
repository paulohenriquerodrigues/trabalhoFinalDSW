
var UserProfile = (function() {
    var cpfUser = "";
    var carrinhoCompras = [];
    var admin = false;

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
        setAdmin: setAdmin
    }

})();


export default UserProfile;