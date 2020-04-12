package com.example.myapp;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;


public class MainActivity extends AppCompatActivity {

    //Declare
    Button button1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //Initialize
        button1 = findViewById(R.id.button1);
    }

    public void onButton1Click(View view) {

        //Crete Dialog builder
        AlertDialog.Builder alertDialogBuilder = new AlertDialog.Builder(this);

        //Alert Message
        alertDialogBuilder.setMessage("Are you sure");

        //Set A positive Button
        alertDialogBuilder.setPositiveButton("yes",
                new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface arg0, int arg1) {
                        //If yes: do something
                    }
                });

        //Set a negative Button
        alertDialogBuilder.setNegativeButton("No", new DialogInterface.OnClickListener() {
            @Override
            public void onClick(DialogInterface dialog, int which) {
                //If no: do something
            }
        });

        //Create the dialog and show
        AlertDialog alertDialog = alertDialogBuilder.create();
        alertDialog.show();
    }


}
