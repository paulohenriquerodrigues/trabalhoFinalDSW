package WebService;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import javax.swing.ImageIcon;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 * REST Web Service
 *
 * @author Ivens
 */
@Path("Imagem")
public class ImagemResource {

    @Context
    private UriInfo context;

    public ImagemResource() {
    }

    @GET
    @Path("/{caminho}")
    @Produces("image/png")
    public byte[] getImagem(@PathParam("caminho") String caminhoImagem) throws IOException {
        File file = new File("D:/Engenharia de Software/GitHub/trabalhoFinalDSW/API_REST/API_REST_DSW/src/imagens/" + caminhoImagem);
        if (file.exists()){            
            FileInputStream fis = new FileInputStream(file);
            byte[] data = new byte[fis.available()];
            fis.read(data);
            return data;            
        }return null;
    }
    
}
