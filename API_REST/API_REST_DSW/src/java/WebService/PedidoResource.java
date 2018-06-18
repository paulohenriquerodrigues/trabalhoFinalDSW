package WebService;

import Model.Pedido;
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
        return null;
    }

}
