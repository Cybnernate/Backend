package com.revature.model;

import java.util.List;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
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
	
	@Column(name = "TESTDATA", length = 200)
	private String testData;

	public P2TestAnn() {
		super();
		// TODO Auto-generated constructor stub
	}

	public P2TestAnn(String tname, String tresult, String testData) {
		super();
		this.tname = tname;
		this.tresult = tresult;
		this.testData = testData;
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

	public String getTestData() {
		return testData;
	}

	public void setTestData(String testData) {
		this.testData = testData;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((testData == null) ? 0 : testData.hashCode());
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
		if (testData == null) {
			if (other.testData != null)
				return false;
		} else if (!testData.equals(other.testData))
			return false;
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
		return "P2TestAnn [tid=" + tid + ", tname=" + tname + ", tresult=" + tresult + ", testData=" + testData + "]";
	}

	
}
