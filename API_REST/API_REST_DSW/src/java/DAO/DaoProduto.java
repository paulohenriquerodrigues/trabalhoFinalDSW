package DAO;

import Model.Produto;
import java.util.List;

/**
 *
 * @author Ivens
 */
public class DaoProduto extends Dao{
    
    public static List<Produto> listarTodosProdutos(){
        return getEm().createQuery("SELECT P FROM Produto P").getResultList();
    }
    
}
