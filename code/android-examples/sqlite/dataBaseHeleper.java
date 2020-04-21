package com.example.ecapp;
import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import androidx.annotation.Nullable;

import java.util.ArrayList;
import java.util.List;

public class DataBaseHelper extends SQLiteOpenHelper {

    //Constants for table name and every column name
    private static final String STUDENT_TABLE = "STUDENT_TABLE";
    private static final String COLUMN_STUDENT_ID = "id";
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
}
