package DAO;

import Model.Pedido;
import java.util.List;

/**
 *
 * @author Ivens
 */
public class DaoPedido extends Dao{
    
    public Pedido retornaPedido(int numeroPedido){
        List<Object> pedidos = getEm().createQuery("SELECT P FROM Pedido P WHERE P.ID = " + numeroPedido).getResultList();
        if (!pedidos.isEmpty())
            return (Pedido) pedidos.get(0);
        else return null;
    }
    
}
