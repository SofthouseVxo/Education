### Storing data in an Android App

---

### Topics

- Storing data locally
  - Ways to store data
- SQLite
  - SQL
- JSON
- Create a basic database model
- ```Creating & Using SQLite in Android
   SQLite Library & classes
   Executing String Query
   Create Custom CRUD Methods
     Write data to table
     Use the Custom Operations
     sqliteBrowser
     Read Data from table
     Show data on listview
     Delete data from table
  ```
- Challenge

---

### Storing data locally

- Android uses a file system that's similar to disk-based file systems on other platforms.
- User settings, application settings, user data, images, or a cache of data fetched from the internet.
- Multiple ways to store data, with each method having it’s advantages and disadvantages.
  <img width="600" src="/media/android-dev-images/android-dev-9/android-dev-sqlite.png" alt="sqlite and android">

---

### Ways to store data

- Shared Preferences: To save primitive data in key-value pairs.
  - Use Shared preferences to store application preferences.
  - Login session credentials.
- Internal Storage: store data to the device filesystem.
  - Completely private, Do not want any other app (even the user) to read this data.
  - Sensitive information that other apps shouldn't access.
  - Deleted on uninstall.
- SQLite database: Store app specific structured data.
  - an open-source relational database.
  - Not accessible by outside applications.

---

### Storing data Online (Cloud)

- Using API Services.
- SQL Server (MySQL.. etc).
- Google Firebase, Microsoft Azure & MongoDB.
  <img width="600" src="/media/android-dev-images/android-dev-9/android-dev-cloud.png" alt="Cloud">

---

### SQLITE

- Embedded relational database, built in.
- ACID Compliant, handle failure without data loss.
- Small Size.
- CURD operation locks database.

---

### SQL

- SQL:
  - Structured Query Language.
  - Access and manipulate databases
  - Create, Read, Update & Delete.
- ```SQL
    CREATE TABLE STUDENT_TABLE (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, course INTEGER, done BOOLEAN);
    SELECT * FROM Students;
  ```

---

### JSON

- JSON:
  - JavaScript Object Notation.
  - syntax for storing and exchanging data.
  - JSON format is text only, can easily be sent and recived.
- ```JSON
    {
        "id": "1",
        "name": "Yazeen",
        "course": "Android Course",
        "done": "true"
    }
  ```

---

### Creating & Using SQLite in Android (Demo)

- Step by step (Student as example).

---

### SQLite Library & classes

- Include library
- SQLiteDatabase
- ```Java
    SQLiteDatabase db = this.getWritableDatabase();
  ```
- SQLiteOpenHelper
  - interface methods for onCreate onUpdate.
  - Custom wirtten functions perform CURD functions:
    - E.g insertOne(Student), getStudentById() ... etc.
- Cursor
  - Result set from a query.
  - loop through to process each line of result.
- ContentValues
  - key&value pair.

---

### Executing String Query

- Create a string containing the SQLite query statement.
- Use the execSQL() method to execute it on the database.
- ```Java
    String queryString = "CREATE TABLE STUDENT_TABLE (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, course INTEGER, done BOOLEAN);"

    myDB.execSQL(queryString);
  ```

---

### Create a basic database model

- What data do i need to store.
- Thnik of the data tables.
- What operations do i need to use.

  <img width="400" src="/media/android-dev-images/android-dev-9/android-dev-databasemodel.png" alt="database model">

---

### Creating the data model

- Create java class for the data that will be stored, e.g Student.
- Generate or add your own functions:

  - constructor, getters, setters & toString
  - custom functions.

```Java
    public class Student {

        private int id;
        private String name;
        private String course;
        private boolean done;

        public Student(int id, String name, String course, boolean done) {
            this.id = id;
            this.name = name;
            this.course = course;
            this.done = done;
        }

        public void setName(String name) {
            this.name = name;
        }

        public int getId() {
            return id;
        } ..
```

---

### Creating the Database

- This method will open an existing database or create on in the application.

- Parameters: path, factory, errorHandler .. etc.

- ```Java
    import android.database.sqlite.SQLiteDatabase;

    SQLiteDatabase myDB;

    myDB = OpenOrCreateDatabase("Student.db", SQLiteDatabase.CREATE_IF_NECESSARY, null);
  ```

---

### DatabaseHelper Class

- Create a new java class.
- Extened SQLiteHelper class.
- Implement the override methods.

```Java
  public class DataBaseHelper extends SQLiteOpenHelper {


    public DataBaseHelper(@Nullable Context context) {
        super(context, "Student.db", null, 1);
    }

    //This called the first time a database is accessed.
    //Code to create database should be here.
    @Override
    public void onCreate(SQLiteDatabase db) {

    }

    //This is called if the database version number is changed.
    //Prevents old users from breaking when the database design is changed.
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}
```

---

### Creating Tables

- Define constants for tablename and all the columns.
- Create a string with sql query.

```Java
public class DataBaseHelper extends SQLiteOpenHelper {

    //Constants for table name and every column name
    private static final String STUDENT_TABLE = "STUDENT_TABLE";
    private static final String COLUMN_STUDENT_NAME = "name";
    private static final String COLUMN_STUDENT_COURSE = "course";
    private static final String COLUMN_STUDENT_DONE = "done";

    public DataBaseHelper(@Nullable Context context) {
        super(context, "Student.db", null, 1);
    }

    //This called the first time a database is accessed.
    //Code to create database should be here.
    @Override
    public void onCreate(SQLiteDatabase db) {

        //Create the Student Table
        String createTableQuery = "CREATE TABLE " + STUDENT_TABLE  + " (id INTEGER PRIMARY KEY AUTOINCREMENT," +
                COLUMN_STUDENT_NAME  + " TEXT, " + COLUMN_STUDENT_COURSE +" INTEGER, "+COLUMN_STUDENT_DONE+" BOOLEAN);";

        db.execSQL(createTableQuery);
    }

    //This is called if the database version number is changed.
    //Prevents old users from breaking when the database design is changed.
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {

    }
}
```

---

### Create Custom CURD Methods

- Create your own function for CURD operations.

---

### Write data to table

```Java
    public boolean addStudent (StudentModel studentModel){
        //refers to database
        SQLiteDatabase db = this.getWritableDatabase(); //this refers to the class

        //similar to hashmap/intent (key,value) pair
        ContentValues cv = new ContentValues();

        //Fill the cv with keys & values
        cv.put(COLUMN_STUDENT_NAME, studentModel.getName());
        cv.put(COLUMN_STUDENT_COURSE, studentModel.getCourse());
        cv.put(COLUMN_STUDENT_DONE, studentModel.isDone());

        //insert the data to the table
        long insert = db.insert(STUDENT_TABLE, null, cv);

        // the method above will return a positive long on success and negative one on failure
        if(insert == -1){
            return false;
        }else{
            return true;
        }
    }
```

---

### Use the Custom Operations

- Define & refernce views.
- Add onClickListener to the button.

```Java
public class MainActivity extends AppCompatActivity {

    //Declare
    private EditText nameInput;
    private EditText courseInput;
    private Button addButton;
    private Button viewAllButton;
    private Switch courseDone;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //init
        nameInput = findViewById(R.id.nameInput);
        courseInput = findViewById(R.id.courseInput);
        addButton = findViewById(R.id.addButton);
        viewAllButton = findViewById(R.id.viewAllButton);
        courseDone = findViewById(R.id.doneSwitch);

        //On Add button Click
        addButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                //Declare empty Student
                StudentModel student;

                //Reference database helper
                DataBaseHelper dbHelper = new DataBaseHelper(MainActivity.this);

                //Init the student
                student = new StudentModel(-1, nameInput.getText().toString(), courseInput.getText().toString(), courseDone.isChecked());

                //Add the student
                //boolean to check for errors
                boolean added = dbHelper.addStudent(student);

                Toast.makeText(MainActivity.this, "ADDED: " + added, Toast.LENGTH_SHORT).show();

            }
        });

    }


}
```

---

### See the table data using sqliteBrowser

- Get the database file:
  - View -> Tool Windows -> Device Explorer
  - Data -> Data -> your_app_packagename -> databases.
  - RMD -> Save as.
- Use sqlitebrowser to see the table data.
- Download https://sqlitebrowser.org/dl/

<img width="600" src="/media/android-dev-images/android-dev-9/android-dev-sqlite-browser.png" alt="sqlite browser">

---

### Read Data from table

```Java
    public List<StudentModel> getAllStudent(){
        //refers to database, readable.
        //Writable locks the database but not readable.
        SQLiteDatabase db = this.getReadableDatabase();

        //Student array list
        List<StudentModel> studentList = new ArrayList<>();

        //Get all student query
        String getAllStudentQuery = "SELECT * FROM " + STUDENT_TABLE ;

        //Execute the query, rawQuery have return.
        Cursor cursor = db.rawQuery(getAllStudentQuery, null);

        //if Cursor have data
        if(cursor.moveToFirst()){
            //Loop through the cursor
            //put each item on the list
            do {
                //get all values
                int studentID = cursor.getInt(0); //0 refers to the first place on the table.
                String studentName = cursor.getString(1);
                String courseName = cursor.getString(2);
                boolean isDone = cursor.getInt(3) > 0;

                //Create the student object
                StudentModel student = new StudentModel(studentID, studentName, courseName, isDone);

                //add student to the list
                studentList.add(student);

            }while(cursor.moveToNext());

        }else{
            //Fail, do nothing.
        }

        //Close both the cursor and the db connection.
        cursor.close();
        db.close();
        return studentList;
    }
```

---

### Show data on listview

- Add ListView to your app.
- Set onClickListner on view all button.
- Create & set adpater for listview.

```Java
        //On View All button on Click
        viewAllButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DataBaseHelper dbHelper = new DataBaseHelper(MainActivity.this);
                showStudentOnListView(dbHelper);
            }
        });

    }

    //Create & set the adapter
    public void showStudentOnListView(DataBaseHelper dbHelper){
        studentArrayAdapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, dbHelper.getAllStudent());
        studentListView.setAdapter(studentArrayAdapter);
    }
```

---

### Delete data from table

- Add delete function to dataBaseHelper class.

```Java
 public boolean deleteStudent(StudentModel studentModel){
        SQLiteDatabase db = this.getWritableDatabase();

        //Query to delete student where id match student id
        String deleteStudentQuery = "DELETE FROM " + STUDENT_TABLE + " WHERE " + COLUMN_STUDENT_ID + " = " + studentModel.getId();

        //Cursor should not be empty if student is deleted.
        Cursor cursor = db.rawQuery(deleteStudentQuery, null);

        //Error check
        if(cursor.moveToFirst()){
            return true;
        }else{
            return false;
        }
    }
```

---

### Remove student on click

- Add onItemClickListener.

```Java
  //On List item Click listener
        studentListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                //Reference database helper
                DataBaseHelper dbHelper = new DataBaseHelper(MainActivity.this);

                //Get the student to delete
                StudentModel studentModel = (StudentModel) parent.getItemAtPosition(position);

                //delete student
                dbHelper.deleteStudent(studentModel);

                //Update the listView
                showStudentOnListView(dbHelper);
            }
        });
```

---
