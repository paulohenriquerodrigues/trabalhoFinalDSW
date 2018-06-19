package DAO;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Ivens
 */
public class Dao {   
    
    protected static EntityManager getEm(){
        EntityManagerFactory emf = javax.persistence.Persistence.createEntityManagerFactory("API_REST_DSWPU");      
        
        return emf.createEntityManager();
    }
    
    public static Object ler(Class classe, long id){
        Object objeto = null; 
        EntityManager em = getEm();
        em.getTransaction().begin();
        try {
            objeto = em.find(classe, id);
            em.getTransaction().commit();            
        } catch (Exception e){
            e.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.close();        
        }
        
        return objeto;
    }    
    
    public static void salvar(Object objeto){
        EntityManager em = getEm();
        em.getTransaction().begin();
        try {
            em.persist(objeto);
            em.getTransaction().commit();
        } catch (Exception e){
            e.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }
    
    public static void update(Object objeto){
        EntityManager em = getEm();
        em.getTransaction().begin();
        try {
            em.merge(objeto);
            em.getTransaction().commit();
        } catch (Exception e){
            e.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.close();
        }
    }
    
    public static void remover(Object objeto){
        EntityManager em = getEm();
        em.getTransaction().begin();
        try {
            Object current = objeto;
            if (!em.contains(objeto)){
                current = em.merge(objeto);
            }
            em.remove(current);
            em.getTransaction().commit();
        } catch (Exception e){
            e.printStackTrace();
            em.getTransaction().rollback();
        } finally {
            em.close();
        }        
    }

}