package WebService;

import DAO.Dao;
import DAO.DaoUsuario;
import Model.Usuario;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author Ivens
 */
@Path("Usuario")
public class UsuarioResource {

    @Context
    private UriInfo context;

    public UsuarioResource() {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Usuario> getListaUsuariosJSON() {
        return DaoUsuario.listarTodosUsuarios();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(Usuario usuario) {
        Dao.salvar(usuario);
    }
}
