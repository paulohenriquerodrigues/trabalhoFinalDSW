package Model;

import java.util.HashMap;

/**
 *
 * @author Ivens
 */
public class Sessoes {
    
    private static Sessoes instance;
    private HashMap<String, Usuario> sessoes;
    
    private Sessoes(){
        sessoes = new HashMap<String, Usuario>();
        System.out.println("Criei sessões");
    }
    
    public synchronized static Sessoes getInstance(){
        if (instance == null){
            instance = new Sessoes();
        }
        
        return instance;
    }
    
    public void insereNaSessao(Usuario usuario){
        sessoes.put(usuario.getCpf(), usuario);
        System.out.println(sessoes);
    }    
    
    public Usuario retornaUsuarioNaSessao(String cpf){
        return sessoes.get(cpf);
    }
    
}
