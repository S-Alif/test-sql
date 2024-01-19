**NOTE :** Before everything you need have sql installed in your local computer

<hr>

### How to run backend ?
 - navigate to **backend** folder
 - use the command **npm install** to install all the dependencies
 - then **npm run dev** to run the server
 - change your database configurations here
 
 ```
 const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your password",
  database: "your database name"
})
```

<hr>

### For frontend
 - navigate to **frontend** folder
 - use the command **npm install** to install all the dependencies

<hr>

### For database
 - Just create a database, give it a name and use it in **`app.js`** like shown above
 - the table name is **users** and has 5 fields
    - **id**: primary key and integer 
    - **name**: varchar
    - **gender**: varchar
    - **age**: integer
    - **img**: varchar
