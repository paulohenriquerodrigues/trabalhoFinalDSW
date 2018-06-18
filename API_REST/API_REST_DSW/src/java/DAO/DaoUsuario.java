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
    
    public static Usuario retornaUsuarioPeloCpf(long cpf){
        List<Object> usuarios = getEm().createQuery("SELECT U FROM Usuario U WHERE U.cpf = " + cpf).getResultList();
        if (!usuarios.isEmpty())
            return (Usuario) usuarios.get(0);
        else return null;
    }
    
}
