CREATE TABLE shoppers (
  self SERIAL PRIMARY KEY,
  first VARCHAR(255),
  last VARCHAR(255),
  email VARCHAR(255)
);

CREATE TABLE sections (
  self SERIAL PRIMARY KEY,
  value VARCHAR(255)
);

CREATE TABLE items (
  self SERIAL PRIMARY KEY,
  value VARCHAR(255),
  price DECIMAL,
  section_id INT REFERENCES sections(self)
);

CREATE TABLE orders (
  self SERIAL PRIMARY KEY,
  shopper_id INT REFERENCES shoppers(self)
);

CREATE TABLE order_items (
  order_id INT REFERENCES orders(self),
  item_id INT REFERENCES items(self)
);
