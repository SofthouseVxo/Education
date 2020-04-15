package com.example.ecapp;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;


public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Log.i("lifecycle","onCreate Called");
    }

    public void loginButtonOnClick(View view){
        //New intent
        Intent myIntent = new Intent(this, LoginActivity.class);
        //Start a new activity
        startActivity(myIntent);
    }

    @Override
    protected void onStart() {
        super.onStart();
        Log.i("lifecycle","onStart Called");
    }
    @Override
    protected void onResume() {
        super.onResume();
        Log.i("lifecycle","onResume Called");
    }
    @Override
    protected void onPause() {
        super.onPause();
        Log.i("lifecycle","onPause Called");
    }
    @Override
    protected void onStop() {
        super.onStop();
        Log.i("lifecycle","onStop Called");
    }
    @Override
    protected void onRestart() {
        super.onRestart();
        Log.i("lifecycle","onRestart Called");
    }
    @Override
    protected void onDestroy() {
        super.onDestroy();
        Log.i("lifecycle","onDestroy Called");
    }

}
