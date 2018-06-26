package DAO;

import Model.Usuario;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author Ivens
 */
public class DaoUsuario extends Dao{
    
    public static List<Usuario> listarTodosUsuarios(){        
        return getEm().createQuery("SELECT U FROM Usuario U ORDER BY U.nomeCompleto").getResultList();
    }
    
    public static Object retornaUsuarioPeloCpf(String cpf){
        List<Object> usuarios = getEm().createQuery("SELECT U FROM Usuario U WHERE U.cpf = '" + cpf + "'").getResultList();
        if (!usuarios.isEmpty())
            return usuarios.get(0);
        else return null;
    }    
    
    public static Object verificaSeExisteUsuario(String cpf, String senha){        
        List<Object> usuarios = getEm().createQuery("SELECT U FROM Usuario U WHERE U.cpf like " + cpf + " AND U.senha like " + senha).getResultList();            
        if (!usuarios.isEmpty())
            return usuarios.get(0);
        else return null;
    }
    
}
