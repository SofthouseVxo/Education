package com.example.ecapp;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {

    EditText nameInput;
    Button displayButton;
    TextView nameDisplay;
    String name;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i("lifecycle","onCreate Called");

        nameInput = findViewById(R.id.nameInput);
        displayButton = findViewById(R.id.displayButton);
        nameDisplay = findViewById(R.id.nameView);

        //First Way:
        //Check for null & Get the name
        if(savedInstanceState != null){
            name = savedInstanceState.getString("name");
            nameDisplay.setText(name);
        }

    }

    public void displayButtonOnClick(View view){
        name = nameInput.getText().toString();
        nameDisplay.setText(name);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        //Save the name
        outState.putString("name", name);
    }

    //Second way:
    @Override
    protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
        super.onRestoreInstanceState(savedInstanceState);

    }
}
