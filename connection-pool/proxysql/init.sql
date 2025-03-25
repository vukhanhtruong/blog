-- Add backend MariaDB server
INSERT INTO mysql_servers (hostgroup_id, hostname, port) VALUES (0, 'db', 3306);

-- Add user credentials
INSERT INTO mysql_users (username, password, default_hostgroup, max_connections) VALUES ('user', 'pass', 0, 100);

-- Apply config
LOAD MYSQL SERVERS TO RUNTIME;
LOAD MYSQL USERS TO RUNTIME;
SAVE MYSQL SERVERS TO DISK;
SAVE MYSQL USERS TO DISK;

