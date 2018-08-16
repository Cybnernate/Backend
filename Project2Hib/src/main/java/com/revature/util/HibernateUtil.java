package com.revature.util;


import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
	private static SessionFactory mysession;
	private HibernateUtil() {
		
	}
	
	//This configure method can take a filename.
	//But by default looks for configure file under resources
	//name of the configuration - hibernate.cfg.xml
	public static SessionFactory getSession() {
		if(mysession == null)
		mysession = new Configuration().configure().buildSessionFactory();
		
		return mysession;
	}
}
