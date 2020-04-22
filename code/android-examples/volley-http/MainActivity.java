package com.example.ecapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class MainActivity extends AppCompatActivity {
    //Declare
    private TextView resultTextView;
    private Button getButton, postButton, putButton, deleteButton;
    //1.Declare Request queue
    private RequestQueue reqQueue;

    //2. Define url
    //reqres free online REST API with fake data.
    private static final String SERVER_URL = "https://reqres.in/api";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //init
        getButton = findViewById(R.id.getButton);
        postButton = findViewById(R.id.postButton);
        putButton = findViewById(R.id.putButton);
        resultTextView = findViewById(R.id.resultTextView);
        deleteButton = findViewById(R.id.deleteButton);

        //3.init a Request queue
        reqQueue = Volley.newRequestQueue(this);

        //On get button Click
        getButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getButton.setEnabled(false);
                //4. Create the request
                JsonObjectRequest myGetRequest = new JsonObjectRequest(Request.Method.GET, SERVER_URL + "/users/1", null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        //3. Parse response,do something on success
                        try{
                            //Create JsonObject and parse data object
                            JSONObject data = response.getJSONObject("data");
                            resultTextView.setText(data.getString("email"));

                        }catch (Exception e){
                            e.printStackTrace();
                        }
                        getButton.setEnabled(true);
                    }
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        //4. do something of fail
                        error.printStackTrace();
                        getButton.setEnabled(true);
                    }
                });
                //5. add the request to queue
                reqQueue.add(myGetRequest);
            }
        });

        //On post button Click
        postButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                postButton.setEnabled(false);
                try {
                    //Create post body
                    JSONObject postData = new JSONObject();
                    postData.put("id", "2");
                    postData.put("email", "ec.edu@reqres.in");
                    postData.put("first_name", "EC");
                    postData.put("last_name", "Education");

                    JsonObjectRequest myPostRequest = new JsonObjectRequest(Request.Method.POST, SERVER_URL + "/users", postData, new Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject response) {
                            postButton.setEnabled(true);
                            resultTextView.setText("POST Complete");
                            Toast.makeText(MainActivity.this, response.toString(), Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            //4. do something of fail
                            postButton.setEnabled(true);
                            resultTextView.setText("POST Failed");
                            error.printStackTrace();
                        }
                    });
                    //5. add the request to queue
                    reqQueue.add(myPostRequest);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

        //On Put Button Click
        putButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    //Create put body
                    putButton.setEnabled(false);
                    JSONObject putData = new JSONObject();
                    putData.put("id", "2");
                    putData.put("email", "ec.edu@reqres.in");
                    putData.put("first_name", "EC");
                    putData.put("last_name", "Education");

                    JsonObjectRequest myPostRequest = new JsonObjectRequest(Request.Method.PUT, SERVER_URL + "/users/1", putData, new Response.Listener<JSONObject>() {
                        @Override
                        public void onResponse(JSONObject response) {
                            putButton.setEnabled(true);
                            resultTextView.setText("PUT Complete");
                            Toast.makeText(MainActivity.this, response.toString(), Toast.LENGTH_SHORT).show();
                        }
                    }, new Response.ErrorListener() {
                        @Override
                        public void onErrorResponse(VolleyError error) {
                            //4. do something of fail
                            putButton.setEnabled(true);
                            resultTextView.setText("PUT Failed");
                            error.printStackTrace();
                        }
                    });
                    //5. add the request to queue
                    reqQueue.add(myPostRequest);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

        //On Delete Button Click
        deleteButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                deleteButton.setEnabled(false);
                //4. Create the request
                JsonObjectRequest myGetRequest = new JsonObjectRequest(Request.Method.DELETE, SERVER_URL + "/users/1", null, new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        //3. Parse response,do something on success
                        try{
                            //Create JsonObject
                            resultTextView.setText("Delete Complete");
                        }catch (Exception e){
                            e.printStackTrace();
                        }
                        deleteButton.setEnabled(true);
                    }
                }, new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        //4. do something of fail

                        resultTextView.setText("Delete Failed");
                        deleteButton.setEnabled(true);
                        error.printStackTrace();

                    }
                });
                //5. add the request to queue
                reqQueue.add(myGetRequest);
            }
        });
    }



}
