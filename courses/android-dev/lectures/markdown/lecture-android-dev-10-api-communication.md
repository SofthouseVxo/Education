### Android API & Web Services Communication

---

### Topics

- What is API?
- HTTP
- Android Volley
  - Getting started with Volley
  - Simple Http Volley Request
  - GET Request
  - POST Request
  - PUT Request
  - Delete Request
- Parsing JSON Response
  - JSON object response
  - JSON Array response

---

### What is API?

- Application Programming Interface.
- Collection of communication protocols and subroutines used by various programs to communicate between them.
- WEB API, can be easily accessed using the HTTP protocols.
- Gain access to a specific data, e.g weather information.

<img width="600" src="/media/android-dev-images/android-dev-10/android-dev-api.png" alt="API Overview">

---

### HTTP

- Hyper Text Transfer Protocol.
- Communication between clients and servers is done by requests and responses.
- Common used http requests (CRUD):
  - POST: Send data to server, create data.
  - GET: Get data from server, no effect on data.
  - PUT: Update data on server.
  - Delete: Delete data from server.
- Response in e.g JSON or HTML, with status codes such as:
  - 200: OK.
  - 500: Internal Server Error.
  - 404: Not found.

<img width="600" src="/media/android-dev-images/android-dev-10/android-dev-http.png" alt="HTTP Overview">

---

### Android Volley

- HTTP library.
- Makes networking for Android apps easier and faster.
- Support for raw strings, images, and JSON.
- Not suitable for large download or streaming operation.

---

### Getting started with Volley

- Add volley dependency to your project:
- ```Java
    dependencies {
        ...
        implementation 'com.android.volley:volley:1.1.1'
    }
  ```
- NOTE: Add to build.gradle (Moudle)
- Add Internet permission to your application:
- ```Java
    <uses-permission android:name="android.permission.INTERNET"/>
  ```
- NOTE: Add to AndroidManifest.xml

---

### Getting started with Volley

- Add RequestQueue, containing http Requests that needs to be made.
- Add JsonObjectRequest, Request where the response is JSONObject.
  - JsonObjectRequest parameters:
    - Http method.
    - Url.
    - JsonRequest params.
    - ResponseListener, Invoked on success.
    - ErrorListener, Invoked on failure.
- Add the request to RequestQueue.
- You can use StringRequest when the response is a String.

---

### Simple Http Volley Request

- ```Java
    //1. Define url e.g:
    String url = "https://SERVER_URL....";
    //2.Create a Request queue
    reqQueue = Volley.newRequestQueue(this);
  ```

- ```Java
     //3. Create the request
    JsonObjectRequest myGetRequest = new JsonObjectRequest(Request.Method.GET, url, null, new Response.Listener<JSONObject>() {
        @Override
        public void onResponse(JSONObject response) {
            //3. Parse response,do something on success
        }
    }, new Response.ErrorListener() {
        @Override
        public void onErrorResponse(VolleyError error) {
            //4. do something of fail
            error.printStackTrace();
        }
    });
  ```

- ```Java
    //4. add the request to queue
    reqQueue.add(myGetRequest);
  ```

---

### GET Request

```Java
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
                JsonObjectRequest myGetRequest = new JsonObjectRequest(
                    Request.Method.GET,
                    SERVER_URL + "/users/1",
                    null, new Response.Listener<JSONObject>() {
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

```

---

### POST Request

```Java
    try {
        //Create post body
        JSONObject postData = new JSONObject();
        postData.put("id", "2");
        postData.put("email", "ec.edu@reqres.in");
        postData.put("first_name", "EC");
        postData.put("last_name", "Education");

        JsonObjectRequest myPostRequest = new JsonObjectRequest(
            Request.Method.POST,
            SERVER_URL + "/users",
            postData, new Response.Listener<JSONObject>() {
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
```

---

### PUT Request

```Java
    try {
        //Create put body
        putButton.setEnabled(false);
        JSONObject putData = new JSONObject();
        putData.put("id", "2");
        putData.put("email", "ec.edu@reqres.in");
        putData.put("first_name", "EC");
        putData.put("last_name", "Education");

        JsonObjectRequest myPostRequest = new JsonObjectRequest(
            Request.Method.PUT,
            SERVER_URL + "/users/1",
            putData, new Response.Listener<JSONObject>() {
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

```

---

### Delete Request

```Java
    //4. Create the request
    JsonObjectRequest myGetRequest = new JsonObjectRequest(
        Request.Method.DELETE,
        SERVER_URL + "/users/1",
        null, new Response.Listener<JSONObject>() {
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
```

---

### Parsing JSON object response

- Json response example:
- ```JSON
    {
    "data": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
        }
    }
  ```

- To parse the json above:
- ```Java
    JSONObject data = response.getJSONObject("data");
    String firstName = data.getString("first_name");
  ```

---

### Parsing JSON Array response

- ```JSON
    {
    "users": 2,
    "data": [
        {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        }
    ]
    }
  ```
- ```Java
   ArrayList<String> emails = new ArrayList<>();
   JSONArray dataArray = response.getJSONArray("data");
   for (int i=0; i < dataArray.length();i++){
       //Get the item
       JSONObject user = dataArray.getJSONObject(i);
       //get email & add it to arrayList
       emails.add(user.getString("email"));
   }
  ```

---

### Singleton Volley Class

- One RequestQueue.
- Works for multiple activities.
- Better performance and resource efficiency.

---

### Data Model

- Handle data in object form.
- Easier to access & store.

---

### Questions ?
