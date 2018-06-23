package WebService;

import DAO.DaoProduto;
import Model.Produto;
import java.io.File;
import java.util.List;
import javax.swing.ImageIcon;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
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
    
    @GET
    @Path("/{caminhoImagem}")
    public Boolean getImagem(@PathParam("caminhoImagem") String caminhoImagem){
        File file = new File("D:/Engenharia de Software/GitHub/trabalhoFinalDSW/API_REST/API_REST_DSW/src/imagens/" + caminhoImagem);
        return file.exists();
    }    

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putProduto(Produto produto) {
        DaoProduto.salvar(produto);
    }
}
