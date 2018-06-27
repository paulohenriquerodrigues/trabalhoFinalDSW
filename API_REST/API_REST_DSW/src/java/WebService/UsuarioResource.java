package WebService;

import DAO.DaoPedido;
import DAO.DaoUsuario;
import Model.Pedido;
import Model.Sessoes;
import Model.Usuario;
import java.util.HashMap;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Ivens
 */
@Path("Usuario")
public class UsuarioResource {
    
    HashMap<String, Usuario> sessoes;

    @Context
    private UriInfo context;

    public UsuarioResource() {
        sessoes = new HashMap<String, Usuario>();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Usuario> getListaUsuariosJSON() {
        return DaoUsuario.listarTodosUsuarios();
    }
    
    @GET
    @Path("/{cpfUsuario}")
    @Produces(MediaType.APPLICATION_JSON)
    public Usuario getUsuarioPeloID(@PathParam("cpfUsuario") String cpfUsuario){
        return (Usuario)DaoUsuario.retornaUsuarioPeloCpf(cpfUsuario);
    }
        
    @GET
    @Path("/buscar")
    public Usuario getVerificaSeExisteUsuario(@QueryParam("cpfUsuario") String cpfUsuario, 
                                              @QueryParam("senha") String senha){        
        System.out.println(cpfUsuario + " " + senha);        
        Usuario encontrou = (Usuario)DaoUsuario.verificaSeExisteUsuario(cpfUsuario, senha);
        if (encontrou != null){
            Sessoes.getInstance().insereNaSessao(encontrou);
        }
        return encontrou;
    }
    
    @GET
    @Path("/{cpfUsuario}/pedidos")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Pedido> getListaPedidosUsuario(@PathParam("cpfUsuario") String cpfUsuario){
        return DaoPedido.listarTodosPedidosDoCliente(cpfUsuario);
    }    
    
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putUsuario(Usuario usuario) {
        DaoPedido.salvar(usuario);
    }
}
