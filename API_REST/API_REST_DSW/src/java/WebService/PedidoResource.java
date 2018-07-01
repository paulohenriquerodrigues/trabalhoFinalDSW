package WebService;

import DAO.DaoPedido;
import Model.Pedido;
import Model.Produto;
import Model.Sessoes;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Ivens
 */
@Path("Pedido")
public class PedidoResource {

    @Context
    private UriInfo context;

    public PedidoResource() {
    }

    @GET
    @Path("/{numPedido}")
    @Produces(MediaType.APPLICATION_JSON)
    public Pedido getPedido(@PathParam("numPedido") String numPedido) {
        return DaoPedido.retornaPedido(Integer.parseInt(numPedido));
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pedido> getTodosPedidos(){
        return DaoPedido.listarTodosPedidos();
    }
    
    @PUT
    @Path("/{cpfUsuario}")
    @Consumes(MediaType.APPLICATION_JSON)
    public void putPedido(List<Produto> listaProdutos, @PathParam("cpfUsuario") String cpfUsuario){    
        System.out.println(Sessoes.getInstance().retornaUsuarioNaSessao(cpfUsuario));
        DaoPedido.criarPedido(listaProdutos, Sessoes.getInstance().retornaUsuarioNaSessao(cpfUsuario));
    }
    
    @PUT
    @Path("/{idPedido}/confirma")
    public void confirmaPedido(@PathParam("idPedido") String idPedido){   
        DaoPedido.confirmaPagamento(DaoPedido.retornaPedido(Integer.parseInt(idPedido)));
    }

}
