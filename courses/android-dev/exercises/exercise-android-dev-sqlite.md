### Help Links

1. Läs mer om SQL: https://www.w3schools.com/sql/

2. Läs mer om JSON: https://www.w3schools.com/js/js_json_intro.asp

3. Läs mer om SQLite: https://www.tutorialspoint.com/sqlite/index.htm

4. Läs mer om relational dbs och foreign keys (koppla ihop tabeller): https://www.sqlitetutorial.net/sqlite-foreign-key/

### Lab

1. Tänk på något du vill spara (t.ex customer info)

2. Skapa en modal (class) för datan du vill spara.

3. Skapa en Database Helper class och implementera CURD operations.

4. Lägg till CURD funktionalitet på Activity:s och kalla det via buttons/events (du besämmer hur det ska se ut).

5. Exportera databasen utanför appen och öppna det via ett externt program (t.ex DB Browser for sqlite)

### Challenge: Edit E.x "Student"

- instructions:

  - Create a new Activity with one listView similar to the one we had on MainActivity.
  - Add EditText and the other views to update student info (i.e name,course .. etc) and add button "update" to EditStudentActivity.
  - Add Edit Student button to the MainActivity, onClick should open the EditStudentActivity.
  - ListView on the new Activity should show a list of all student.
  - onItemClick should update the views (EditText for name .. etc) with the current clicked object info.
  - the update button should update student info with the new changes that was applied to the views on EditStudentActivity.

- Use Case:

  - Clicking on student on the listView should fill the EditTexts and switch according to student information.
  - Chaning the information and clicking the update button should update the table data.

- Alternative way
- You can add Context Menu to the listview to control the view options.
- You can use Dialog to update student without the need for extra activity.

- _TIP: use the same layout as the one used on this lecture with some modifications_
- Happy Coding :)
