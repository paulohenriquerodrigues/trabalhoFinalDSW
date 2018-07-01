package DAO;

import Model.Produto;
import java.util.List;
import javax.persistence.OrderBy;

/**
 *
 * @author Ivens
 */
public class DaoProduto extends Dao{
    
    public static List<Produto> listarTodosProdutos(){
        return getEm().createQuery("SELECT P FROM Produto P").getResultList();
    }
    
    public static List<Produto> listar10Produtos(){
        return getEm().createQuery("SELECT P FROM Produto P").setMaxResults(10).getResultList();
    }
    
}
