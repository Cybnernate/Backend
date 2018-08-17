package com.revature.model;

import java.sql.Date;

public class P2Batch {
	private String coreCurriculum;
	private String skills;
	//private Date startDate;
	private int dRow;
	private int dCol;
	private String trainer;
	private String cotrainer;
	private String location;
	private String building;
	private String room;
	public P2Batch(String coreCurriculum, String skills, int dRow, int dCol, String trainer, String cotrainer,
			String location, String building, String room) {
		super();
		this.coreCurriculum = coreCurriculum;
		this.skills = skills;
		this.dRow = dRow;
		this.dCol = dCol;
		this.trainer = trainer;
		this.cotrainer = cotrainer;
		this.location = location;
		this.building = building;
		this.room = room;
	}
	@Override
	public String toString() {
		return "P2Batch [coreCurriculum=" + coreCurriculum + ", skills=" + skills + ", dRow=" + dRow + ", dCol=" + dCol
				+ ", trainer=" + trainer + ", cotrainer=" + cotrainer + ", location=" + location + ", building="
				+ building + ", room=" + room + "]";
	}
	
	
}
