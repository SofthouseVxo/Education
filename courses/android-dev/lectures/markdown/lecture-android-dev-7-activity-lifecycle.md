### Activity lifecycle

---

### Activity & lifecycle

- Activity:
  - Using Intents.
  - Multiple Activity.
- Activity Lifecycle:
  - Understand the Activity Lifecycle.
  - Multiple states.
  - When to use what.
- Activity Instance state
  - Save & Retrieve instance/UI state.
- Android Shared Preferences
  - Save & Retrieve

---

### Activity

- An activity represents a single screen in your app with an interface the user can interact with.
- Create Activity in Android Studio: RMB -> New -> Activity.
- XML layout file.

<img width="350" src="/media/android-dev-images/android-dev-7/android-dev-activity.gif" alt="Activity gif">

---

### Activity Example

- ```Java
    public class MainActivity extends AppCompatActivity {
        //All declarations should be here ..

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);

            //All initialization should be here ..
        }

        //Other Functions ..
    }
  ```

---

### Multiple Activity

- Start a new activity using Intent.
- Intent: messaging object you can use to request an action from another app component.
- ```Java
    //New intent
    Intent myIntent = new Intent(this, LoginActivity.class);

    //Start a new activity
    startActivity(myIntent);
  ```

- <img width="550" src="/media/android-dev-images/android-dev-7/android-dev-intent.png" alt="Intent">

---

### Activity lifecycle

- <a href="https://developer.android.com/reference/android/app/Activity.html" target="_blank">Activity Lifecycle Documentation</a>
  <img width="550" src="/media/android-dev-images/android-dev-7/android-dev-activity-lifecycle.png" alt="Activity lifecycle">

---

### onCreate()

- Called when the activity is first created.
- Normal static set up: create views, bind data to lists, etc.
- Always followed by onStart().

---

### onStart()

- Called when the activity is becoming visible to the user.
- Followed by onResume() if the activity comes to the foreground.

---

### onResume()

- Called when the activity will start interacting with the user.
- Always followed by onPause().
  - if user clicked Home button.
  - fragment on top.

---

### onPause()

- Called as part of the activity lifecycle when an activity is going into the background, but has not been killed yet.
- Going from Activity A to Activity B, Activity A will be paused until called again.
- Activity B will not be called until Activity A is paused, don't put anything that will take time here.

---

### onStop()

- Called when you are no longer visible to the user. You will next receive either onRestart(), onDestroy() depending on later user activity.

### onDestroy()

- The final call you receive before your activity is destroyed.
- Called when the app is closed & on device orientation.

---

### onRestart()

- When screen is turned off.
- Retrieve activity state.

---

### Multiple states

- All three called when the activity start running:
- onCreate() -> onStart() ->onResume().
- <img width="150" src="/media/android-dev-images/android-dev-7/android-dev-lifecycle1.gif" alt="lifecycle 1">

- When back button is presed:
- onPaused() - > onStop() -> onDestory().

- When home button pressed:
- onPaused() -> onStop().

---

### Demo: Activity-Lifecycle in the code example folder.

<img width="550" src="/media/android-dev-images/android-dev-7/android-dev-activity-lifecycle.png" alt="Activity lifecycle">

---

### Saving UI state

- onDestory method will remove state date from the activity, called when the app is closed & on device rotation.
- Save UI state using savedInstanceState.
- <img width="550" src="/media/android-dev-images/android-dev-7/android-dev-uistate.gif" alt="UI State">

---

### Saving UI state

- ```Java
    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        //Save what you want:
        //Example, Save the name.
        outState.putString("name", name);
    }
  ```
- Bundle are used by activities to pass data to themselves in the future.
- putString(key,value), putChar, putInt ... etc.

---

### Retrieve saved UI state (override)

- ```Java
    @Override
        protected void onRestoreInstanceState(@NonNull Bundle savedInstanceState) {
            super.onRestoreInstanceState(savedInstanceState);
            //Get the saved name
            name = savedInstanceState.getString("name");
        }
  ```
- Override onRestoreInstanceState method.
- No need to check for null.
- Check Saved-instance-state in code examples folder.

---

### Retrieve saved UI state (onCreate)

- Exist on onCreate function in every Activity:
- ```Java
    public class MainActivity extends AppCompatActivity {
            //All declarations should be here ..
            String name;
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.activity_main);

                //Check if savedInstanceState is not null
                if(savedInstanceState != null){
                    //Get the saved name
                    name = savedInstanceState.getString("name");
                }
            }
        }
  ```

- Check for null.
- Get Saved states using savedInstanceState.getString(key), getChar, getInt ..etc.

---

### Android Shared Preferences

- Data Storage option.
- Allow you to save and retrieve data in the form of key,value pair.
- When the user’s settings need to be saved or to store data that can be used in different activities within the app.
- Example: onPause() to save, onCreate() to restore.

---

### Android Shared Preferences step by step ..

- ```JAVA
    // 1.init
    //TIP use constants
    SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS, MODE_PRIVATE);
    SharedPreferences.Editor editor= sharedPreferences.edit();
  ```

- ```JAVA
    //2. Save data
    editor.putString(MYTEXT,input.getText().toString()); //other methods ..
    editor.apply();
  ```

- ```JAVA
    //3.load data
    SharedPreferences sharedPreferences = getSharedPreferences(SHARED_PREFS,MODE_PRIVATE);
    sharedPreferences.getString(data_key,"Default_value"); //other methods ..
  ```

- ```JAVA
    //remove from sharedPreferences
    editor.remove("data_key");
    //clear sharedPreferences
    editor.clear();
  ```

---

### Questions ..

---
