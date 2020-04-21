package com.example.ecapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Switch;
import android.widget.Toast;


public class MainActivity extends AppCompatActivity {

    //Declare
    private EditText nameInput;
    private EditText courseInput;
    private Button addButton;
    private Button viewAllButton;
    private Switch courseDone;
    private ListView studentListView;
    private ArrayAdapter studentArrayAdapter;

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
        studentListView = findViewById(R.id.studentsListView);

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

                //Update the list
                showStudentOnListView(dbHelper);
                Toast.makeText(MainActivity.this, "ADDED: " + added, Toast.LENGTH_SHORT).show();

            }
        });

        //On View All button
        viewAllButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                DataBaseHelper dbHelper = new DataBaseHelper(MainActivity.this);
                showStudentOnListView(dbHelper);
            }
        });

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
    }

    public void showStudentOnListView(DataBaseHelper dbHelper){
        //Create & set the adapter
        studentArrayAdapter = new ArrayAdapter(this, android.R.layout.simple_list_item_1, dbHelper.getAllStudent());
        studentListView.setAdapter(studentArrayAdapter);
    }

}
