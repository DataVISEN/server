#------------------------------------------------------------
#        Script SQLite  
#------------------------------------------------------------


#------------------------------------------------------------
# Table: patient
#------------------------------------------------------------
CREATE TABLE patient(
	id              INTEGER autoincrement NOT NULL ,
	nom             TEXT NOT NULL ,
	prenom          TEXT NOT NULL ,
	sexe            TEXT NOT NULL ,
	date_naissance  NUMERIC NOT NULL ,
	PRIMARY KEY (id)
);


#------------------------------------------------------------
# Table: donnees
#------------------------------------------------------------
CREATE TABLE donnees(
	temps   NUMERIC NOT NULL ,
	type    TEXT NOT NULL ,
	valeur  REAL NOT NULL ,
	id      INTEGER NOT NULL ,
	PRIMARY KEY (temps,type,id) ,
	
	FOREIGN KEY (id) REFERENCES patient(id)
);


