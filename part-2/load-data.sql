CREATE temporary TABLE input (name VARCHAR(255), price DECIMAL, section VARCHAR(255) );

COPY input (name, price, section) from '/Users/learner/Projects/Guild/phase-3-challenge/part-2/grocery.csv' with (format csv, header true);

INSERT INTO sections (value) (SELECT section FROM input GROUP BY section);

INSERT INTO items (value, price, section_id) (SELECT input.name, input.price, sections.self FROM input JOIN sections ON input.section = sections.value);

INSERT INTO shoppers (first, last, email) VALUES ('John', 'Doe', 'jd@jaggededge.com');

  INSERT INTO orders (shopper_id) VALUES (1);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 18);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 6);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 27);

  INSERT INTO orders (shopper_id) VALUES (1);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 15);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 11);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 7);

INSERT INTO shoppers (first, last, email) VALUES ('Lisa', 'Willams', 'lizzy2times@brghtstr.com');

  INSERT INTO orders (shopper_id) VALUES (2);

    INSERT INTO order_items (order_id, item_id) VALUES (3, 18);

    INSERT INTO order_items (order_id, item_id) VALUES (3, 6);

    INSERT INTO order_items (order_id, item_id) VALUES (3, 27);

INSERT INTO shoppers (first, last, email) VALUES ('Samantha', 'Jackstone', 'president@jackstone.com');

  INSERT INTO orders (shopper_id) VALUES (3);

    INSERT INTO order_items (order_id, item_id) VALUES (4, 15);

    INSERT INTO order_items (order_id, item_id) VALUES (4, 11);

    INSERT INTO order_items (order_id, item_id) VALUES (4, 7);

  INSERT INTO orders (shopper_id) VALUES (3);

    INSERT INTO order_items (order_id, item_id) VALUES (5, 18);

    INSERT INTO order_items (order_id, item_id) VALUES (5, 6);

    INSERT INTO order_items (order_id, item_id) VALUES (5, 27);

  INSERT INTO orders (shopper_id) VALUES (3);

    INSERT INTO order_items (order_id, item_id) VALUES (6, 25);

    INSERT INTO order_items (order_id, item_id) VALUES (6, 21);

    INSERT INTO order_items (order_id, item_id) VALUES (6, 17);

INSERT INTO shoppers (first, last, email) VALUES ('Sarah', 'Davenport', 'sarah@letuseatcake.com');

  INSERT INTO orders (shopper_id) VALUES (4);

    INSERT INTO order_items (order_id, item_id) VALUES (7, 18);

    INSERT INTO order_items (order_id, item_id) VALUES (7, 6);

    INSERT INTO order_items (order_id, item_id) VALUES (7, 27);

  INSERT INTO orders (shopper_id) VALUES (4);

    INSERT INTO order_items (order_id, item_id) VALUES (8, 15);

    INSERT INTO order_items (order_id, item_id) VALUES (8, 11);

    INSERT INTO order_items (order_id, item_id) VALUES (8, 7);


INSERT INTO shoppers (first, last, email) VALUES ('Sabrina', 'Whitten', 'sdotenvy@yahoo.com');

  INSERT INTO orders (shopper_id) VALUES (5);

    INSERT INTO order_items (order_id, item_id) VALUES (9, 38);

    INSERT INTO order_items (order_id, item_id) VALUES (9, 36);

    INSERT INTO order_items (order_id, item_id) VALUES (9, 32);

  INSERT INTO orders (shopper_id) VALUES (5);

    INSERT INTO order_items (order_id, item_id) VALUES (10, 35);

    INSERT INTO order_items (order_id, item_id) VALUES (10, 31);

    INSERT INTO order_items (order_id, item_id) VALUES (10, 37);

INSERT INTO shoppers (first, last, email) VALUES ('Solomon', 'Olujamine', 'soluj@slack.com');

  INSERT INTO orders (shopper_id) VALUES (6);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 28);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 36);

    INSERT INTO order_items (order_id, item_id) VALUES (1, 27);

  INSERT INTO orders (shopper_id) VALUES (6);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 15);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 31);

    INSERT INTO order_items (order_id, item_id) VALUES (2, 40);

INSERT INTO shoppers (first, last, email) VALUES ('Sarah', 'Buys-nothing', 'ballingonabudget@thrifty.com');
