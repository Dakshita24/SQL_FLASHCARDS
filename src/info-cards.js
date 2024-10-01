const info = [
  {
      question: "What SQL command is used to retrieve data from a database?",
      answer: "SELECT"
  },
  {
      question: "Which SQL clause is used to filter rows in a query?",
      answer: "WHERE"
  },
  {
      question: "What SQL command is used to add new rows to a table?",
      answer: "INSERT"
  },
  {
      question: "Which SQL command is used to modify existing data in a table?",
      answer: "UPDATE"
  },
  {
      question: "What SQL command is used to remove rows from a table?",
      answer: "DELETE"
  },
  {
      question: "Which SQL clause is used to sort the result set?",
      answer: "ORDER BY"
  },
  {
      question: "What SQL command is used to create a new table?",
      answer: "CREATE TABLE"
  },
  {
      question: "Which SQL clause is used to group rows that have the same values?",
      answer: "GROUP BY"
  },
  {
      question: "What SQL command is used to change the structure of an existing table?",
      answer: "ALTER TABLE"
  },
  {
      question: "Which SQL command is used to remove a table from the database?",
      answer: "DROP TABLE"
  },
  {
      question: "Use the correct function to return the number of records that have the `Price` value set to 18.",
      answer: "SELECT COUNT(*) FROM table_name WHERE Price = 18;"
  },
  {
      question: "Write a query to select all columns from the 'Customers' table where the 'Country' is 'Germany'.",
      answer: "SELECT * FROM Customers WHERE Country = 'Germany';"
  },
  {
      question: "How would you retrieve the first 5 records from a table named 'Products'?",
      answer: "SELECT TOP 5 * FROM Products;"
  },
  {
      question: "Write a query to find the average price of all products.",
      answer: "SELECT AVG(Price) FROM Products;"
  },
  {
      question: "How would you select all customers whose name starts with 'A'?",
      answer: "SELECT * FROM Customers WHERE CustomerName LIKE 'A%';"
  }
]

export default info;