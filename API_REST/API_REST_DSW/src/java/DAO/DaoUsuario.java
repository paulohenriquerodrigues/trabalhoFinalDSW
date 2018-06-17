package DAO;

import Model.Usuario;
import java.util.List;

/**
 *
 * @author Ivens
 */
public class DaoUsuario extends Dao{
    
    public static List<Usuario> listarTodosUsuarios(){        
        return getEm().createQuery("SELECT U FROM Usuario U ORDER BY U.nomeCompleto").getResultList();
    }
    
}
