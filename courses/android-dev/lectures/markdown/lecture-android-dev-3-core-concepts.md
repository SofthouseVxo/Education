### 3.Android development
#### Android Core Concepts

---

#### Android Core Concepts

* APK files
* Android app Components
* Android UI Elements
* XML

---

#### APK files

* APK is the package file format for distributing and installing Android mobile apps.
* The APK contains the compiled Java code and other resources like texts and images for the Android application.

---

#### Android Components

* App components are the essential building blocks of an Android app.
* Each component is an entry point through which the system or a user can enter your app.

* Four different types of app components:
  1. Activities
  1. Services
  1. Broadcast receivers
  1. Content providers

_Intent for communication between components._

---

#### Activity

* **Activity** is a UI component represents a single screen in your app with an interface the user can interact with.
* for example a contact app have one activity showing all contacts and another activity showing each contact information.

* An Activitie Corresponds to a window in a desktop application.
* Activities takes the whole screen,can be stacked on top of each other. 
* You cannot arrange activities side by side.

---

#### Activity

```Java
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}
```

---

#### Activity Example

_Simple login page is one activity, profile page is another._

<img width="300" src="/media/android-dev-images/android-dev-2/android-activity-ex.png" alt="activity">

---

#### Services

* Android services are background processes that can be executed on an Android device, even if no application is visible.
* Services don't need a user interface and can be used to check a server for updates or data in a specified time interval.

---

#### Broadcast receivers

* A broadcast receiver is an Android component which allows you to register for system or application events.
* All registered receivers for an event are notified by the Android runtime once this event happens.

**For example, applications can register for the ACTION_BOOT_COMPLETED system event which is fired once the Android system has completed the boot process.**

---

#### Content providers

* A content provider manages a shared set of app data that you can store in the:
  1. File system
  1. SQLite database
  1. On the web
  1. or on any other persistent storage location that your app can access.
* Through the content provider, other apps can query or modify the data if the content provider allows it.

**For example, OS provides a content provider that manages the user's contact information so that any app with the proper permissions can query the content provider to read and write data.**

---

#### Intent

* **Intent** an message object (request) that an activity can pass to the Android operating system (runtime).
* This to start an activity or other app component in your app.
* It can also be used to pass data between activities.

```Java
//Simple explicit intent
Intent messageIntent = new Intent(this, ShowMessageActivity.class);
startActivity(messageIntent);
```

---

#### More Android UI Elements

* Views
* ViewGroups
* Fragments

---

#### Views

* Views is the individual UI elements and the basic building blocks for user interface components.
* Views are responsible for drawing and event handling.

_Textbox, Textview and buttons are views_

```Java
//Button view
final Button loginButton = findViewById(R.id.login);
//Edit view (Textbox)
final EditText usernameEditText = findViewById(R.id.username);
```

---

#### View Groups

* **ViewGroups** groups a collection of Views together and act as containers for Views.
* The relationship is parent-child where the:
  * ViewGroup is the parent.
  * View is the child.

--- 

#### Common view groups:
* ScrollView: A group that contains one other child view and enables scrolling the child view.
* RecyclerView: A group that contains a list of other views or view groups and enables scrolling them by adding and removing views dynamically from the screen.

---

#### Fragment

* A **Fragment** is a portion of the total user interface, containing Views and ViewGroups inside them and typically only takes up part of the screen.
* Fragments are used inside activities and can be reused within different activities.

_It's like a mini-activity within the main activity._

```Java
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.ViewGroup;

public class ArticleFragment extends Fragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
        Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.article_view, container, false);
    }
}
```

---

#### XML

* Activities, fragments and some ViewGroups use XML files to define their layout and contents.
* The layout XML files specify what UI components contains as well as styling properties of the UI components such as:
  * size 
  * margins
  * paddings.

```XML
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp"
    android:versionCode="1"
    android:versionName="1.0" >
    ...
</manifest>
```

---

#### Links:

* [More about activities](https://developer.android.com/guide/components/activities)
* [More about intet](https://developer.android.com/guide/components/activities)

#### We will go through these topics in more details later in the course
