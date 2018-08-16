package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "P2TestAnn")
@NamedQueries({
	@NamedQuery(name = "RetrieveRecords", query = "from P2TestAnn")
})
public class P2TestAnn {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@SequenceGenerator(initialValue = 1, sequenceName = "testID_generator", allocationSize = 1, name = "testIDgenerator")
	
	@Column(name = "TESTID", nullable = false, precision = 10)
	private int tid;
	
	@Column(name = "TESTNAME", length = 40)
	private String tname;
	
	@Column(name = "TESTRESULT", length = 40)
	private String tresult;

	public P2TestAnn() {
		super();
		// TODO Auto-generated constructor stub
	}

	public P2TestAnn(int tid, String tname, String tresult) {
		super();
		this.tid = tid;
		this.tname = tname;
		this.tresult = tresult;
	}

	public P2TestAnn(String tname, String tresult) {
		super();
		this.tname = tname;
		this.tresult = tresult;
	}

	public int getTid() {
		return tid;
	}

	public void setTid(int tid) {
		this.tid = tid;
	}

	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public String getTresult() {
		return tresult;
	}

	public void setTresult(String tresult) {
		this.tresult = tresult;
	}

	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + tid;
		result = prime * result + ((tname == null) ? 0 : tname.hashCode());
		result = prime * result + ((tresult == null) ? 0 : tresult.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		P2TestAnn other = (P2TestAnn) obj;
		if (tid != other.tid)
			return false;
		if (tname == null) {
			if (other.tname != null)
				return false;
		} else if (!tname.equals(other.tname))
			return false;
		if (tresult == null) {
			if (other.tresult != null)
				return false;
		} else if (!tresult.equals(other.tresult))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "P2TestAnn [tid=" + tid + ", tname=" + tname + ", tresult=" + tresult + "]";
	}
	
	
}
