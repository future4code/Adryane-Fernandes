CREATE TABLE user_cookenu (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE recipe_cookenu (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    creation_date DATE NOT NULL,
    role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL",
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user_cookenu(id)
);

CREATE TABLE followers_cookenu(
	follower_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES user_cookenu(id),
    followed_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (followed_id) REFERENCES user_cookenu(id)
);

SELECT * FROM user_cookenu;
SELECT * FROM recipe_cookenu;
SELECT * FROM followers_cookenu;
