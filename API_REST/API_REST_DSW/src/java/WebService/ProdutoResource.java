package WebService;

import DAO.DaoProduto;
import Model.Produto;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Ivens
 */
@Path("Produto")
public class ProdutoResource {

    @Context
    private UriInfo context;

    public ProdutoResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Produto> getTodosProdutos() {
        return DaoProduto.listarTodosProdutos();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putProduto(Produto produto) {
        DaoProduto.salvar(produto);
    }
}
