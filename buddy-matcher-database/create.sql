CREATE TABLE IF NOT EXISTS codeforgood.user (
	id serial,
	name text,
	phone numeric(10),
	address text,
	city text,
	zipcode numeric(5),
	gender integer,
	email text,
	communication integer,
	has_idd boolean,
	create_date timestamp,
	username text,
	password text,
	PRIMARY KEY( id )
);

CREATE TABLE IF NOT EXISTS codeforgood.interests (
	id serial,
	interest text,
	PRIMARY KEY( id )
);

CREATE TABLE IF NOT EXISTS codeforgood.user_interests (
	user_id integer,
	interest_id integer
);

CREATE TABLE IF NOT EXISTS codeforgood.availability (
	id serial,
	week text,
	daytime text
);

CREATE TABLE IF NOT EXISTS codeforgood.user_availability (
	user_id integer,
	availability_id integer
);