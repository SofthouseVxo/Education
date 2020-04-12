package com.example.myapp;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;


public class MainActivity extends AppCompatActivity {

    //Declare
    Button b1,b2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        //Initialize
        b1 = findViewById(R.id.button1);
        b2 = findViewById(R.id.button2);
        
    }

    public  void changeFragment (View view) {

        Fragment fragment;

        if(view == b1) {
            //initialize Fragment
            fragment = new FirstFragment();

            //Create the manager
            FragmentManager fmManager = getSupportFragmentManager();

            //Create the transaction
            FragmentTransaction fmTransaction = fmManager.beginTransaction();

            //Replace the fragment
            fmTransaction.replace(R.id.fragment_place, fragment);

            //Commit the transaction
            fmTransaction.commit();
        }
        if(view == b2){
            fragment = new SecondFragment();
            FragmentManager fmManager = getSupportFragmentManager();
            FragmentTransaction fmTransaction = fmManager.beginTransaction();
            fmTransaction.replace(R.id.fragment_place, fragment);
            fmTransaction.commit();
        }


    }

}
