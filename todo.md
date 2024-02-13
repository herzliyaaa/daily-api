
[/] Change deprecated functions in TypeORM and change it into DataSource
https://levelup.gitconnected.com/datasource-in-typeorm-a-new-way-to-connect-to-your-database-cdc6622f9bbc

[] Create Entities for this schema:

    *User Table:

    user_id (Primary Key), username, email, password_hash

    *Expense Category Table: 
    
    category_id (Primary Key), category_name

    *Expense Table:

    expense_id (Primary Key), user_id (Foreign Key referencing User Table), 
    category_id (Foreign Key referencing Expense Category Table), amount
    description, date, location