package DAO;

import Model.ItemPedido;
import Model.Pedido;
import Model.Produto;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Ivens
 */
public class DaoPedido extends Dao{
    
    public static Pedido retornaPedido(int numeroPedido){
        List<Object> pedidos = getEm().createQuery("SELECT P FROM Pedido P WHERE P.ID = " + numeroPedido).getResultList();
        if (!pedidos.isEmpty())
            return (Pedido) pedidos.get(0);
        else return null;
    }
    
    public static List<Pedido> listarTodosPedidosDoCliente(String cpfCliente){
        return getEm().createQuery("SELECT P FROM Pedido P WHERE P.cliente.cpf = '" + cpfCliente + "'").getResultList();
    }
    
    public static void criarPedido(List<Produto> produtos){
        List<ItemPedido> listaItens = new ArrayList<>();
        int contador = 1;
        Double valorTotal = 0.0;
        for (Produto p : produtos){
            ItemPedido item = new ItemPedido();
            item.setItemPedido(contador);
            item.setProduto(p);
            item.setQuantidade(1);
            valorTotal += p.getPreco();
            contador++;
        }
        Pedido p = new Pedido();
        p.setEntregue(false);
        p.setItensPedido(listaItens);
        p.setValorTotal(valorTotal);
        salvar(p);
    }
}
