CREATE TABLE user_labook (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE post_labook(
	id VARCHAR(255) PRIMARY KEY,
    picture VARCHAR(255),
    description TEXT,
    create_date DATE NOT NULL,
    type_post ENUM("NORMAL", "EVENT") NOT NULL
);

SELECT * FROM user_labook;
DROP TABLE user_labook;