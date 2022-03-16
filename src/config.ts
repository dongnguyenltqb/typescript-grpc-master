const config = {
  addr: process.env.addr || "localhost:8080",
  db_host: process.env.DB_HOST || "localhost",
  db_port: process.env.DB_PORT || 5432,
  db_name: process.env.DB_NAME || "learn",
};

export default config;
