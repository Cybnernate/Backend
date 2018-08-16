package com.revature.model;

import java.sql.Date;

public class P2Batch {
	private String coreCurriculum;
	private String skills;
	private Date startDate;
	private String trainer;
	private String cotrainer;
	private String location;
	private String building;
	private String room;
	
	public P2Batch(String coreCurriculum, String skills, Date startDate, String trainer, String cotrainer,
			String location, String building, String room) {
		super();
		this.coreCurriculum = coreCurriculum;
		this.skills = skills;
		this.startDate = startDate;
		this.trainer = trainer;
		this.cotrainer = cotrainer;
		this.location = location;
		this.building = building;
		this.room = room;
	}

	@Override
	public String toString() {
		return "P2Batch [coreCurriculum=" + coreCurriculum + ", skills=" + skills + ", startDate=" + startDate
				+ ", trainer=" + trainer + ", cotrainer=" + cotrainer + ", location=" + location + ", building="
				+ building + ", room=" + room + "]";
	}
	
	
}
