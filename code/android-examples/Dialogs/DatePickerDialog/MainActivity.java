package com.example.myapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.DialogFragment;

import android.app.DatePickerDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;

import java.text.DateFormat;
import java.util.Calendar;


public class MainActivity extends AppCompatActivity {

    //Declare
    Button button1;
    TextView dateTextView;
    DatePickerDialog datePickerDialog;
    int year, month, dayOfMonth;
    Calendar calendar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //initialize
        button1 = findViewById(R.id.button1);
        dateTextView = findViewById(R.id.textView1);

        //On button Click
        button1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                //Calendar Configure
                calendar = Calendar.getInstance();
                year = calendar.get(Calendar.YEAR);
                month = calendar.get(Calendar.MONTH);
                dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH);

                //Create the dialog
                datePickerDialog = new DatePickerDialog(MainActivity.this,
                        new DatePickerDialog.OnDateSetListener() {
                            @Override
                            public void onDateSet(DatePicker datePicker, int year, int month, int day) {
                                dateTextView.setText(year + "-" + (month + 1) + "-" + day);
                            }
                        }, year, month, dayOfMonth);

                //Show the dialog
                datePickerDialog.show();
            }
        });
    }
}