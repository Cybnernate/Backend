package com.revature.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.model.P2TestAnn;
import com.revature.util.HibernateUtil;

public class P2TestImplement implements P2TestInterface{

	public boolean insertTestData(P2TestAnn p) {
		Session session = HibernateUtil.getSession().openSession();
		Transaction t1 = null;
		
		try {
			t1 = session.beginTransaction();
			
			session.save(p);
			t1.commit();
			
			return true;
		}
		catch(HibernateException h) {
			if(t1 != null) {
				t1.rollback();
			}
		}
		
		return false;
	}

	public boolean deleteTestData(int tid) {
		Session session = HibernateUtil.getSession().openSession();
		Transaction t1 = null;
		
		try {
			t1= session.beginTransaction();
			P2TestAnn myTest = (P2TestAnn) session.load(P2TestAnn.class, tid);
			session.delete(myTest);
			t1.commit();
			
			return true;
		}
		catch(HibernateException h) {
			if(t1 != null) {
				t1.rollback();
			}
		}
		
		return false;
	}

	public P2TestAnn findTestDatabyId(int tid) {
		Session session = HibernateUtil.getSession().openSession();
		Transaction t1 = null;
		
		try {
			t1 = session.beginTransaction();
			P2TestAnn myTest = (P2TestAnn) session.load(P2TestAnn.class, tid);
			return myTest;
		}
		catch(HibernateException h) {
			if(t1 != null) {
				t1.rollback();
			}
		}
		
		return null;
	}

	public List<P2TestAnn> getAllTests() {
		Session session = HibernateUtil.getSession().openSession();
		Transaction t1 = null;
		
		try {
			t1 = session.beginTransaction();
			List<P2TestAnn> tests = session.createQuery("com.revature.model.P2TestAnn").list();
			return tests;
		}
		catch(HibernateException h) {
			if(t1 != null) {
				t1.rollback();
			}
		}
		
		return null;
	}

	public void closeSession() {
		Session session = HibernateUtil.getSession().openSession();
		session.close();
	}

	public boolean update_test_data(int tid, String result) {
		Session session = HibernateUtil.getSession().openSession();
		Transaction t1 = null;
		P2TestAnn myTest = null;
		try {
			t1 = session.beginTransaction();
			myTest = session.get(P2TestAnn.class, tid);
			myTest.setTresult(result);
			session.saveOrUpdate(myTest);
			t1.commit();
		}
		catch(HibernateException h) {
			if(t1 != null) {
				t1.rollback();
			}
		}
		
		return false;
	}

}
