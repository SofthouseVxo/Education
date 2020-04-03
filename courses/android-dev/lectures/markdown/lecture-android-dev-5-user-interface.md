import { themes } from "mdx-deck";
import customTheme from "../../../custom-theme";

export const theme = {
...themes.highlight,
...customTheme
};

import img1 from "../../../media/android-dev-images/android-dev-5/android-views.png";
import img2 from "../../../media/android-dev-images/android-dev-5/android-views2.png";
import img3 from "../../../media/android-dev-images/android-dev-5/android-textview-subfunctions.png";
import img4 from "../../../media/android-dev-images/android-dev-5/android-view-group.png";

### User Interface & Interactions

---

### User Interface & Interactions

- Views & Implementations
  - Add Views.
  - Declare and initialize Views.
  - Manipulate Views.
- ViewGroups & Implementations
  - ViewGroup example.
  - Declare and initialize ViewGroups.

---

### Views & ViewGroups

The Android View class and ViewGroup class are two very central classes in Android apps.
Android apps can have one or more Activity and every Activity contains multiple UI Components,
the UI components are instances of View or ViewGroup subclasses.

---

### Views

<img width="350" src="/media/android-dev-images/android-dev-5/android-views.png" alt="Android Views">

---

### What are Views?

View objects are the basic building blocks of User Interface in android such as Buttons, checkbox and Textviews.
The View class is a superclass for all UI components in Android which means TextView is subclass of View.
Commonly used View subclasses:

- TextView
- EditText
- ImageView
- ProgressBar
- Button
- ImageButton
- CheckBox
- DatePicker

---

### Different Views

<img width="350" src="/media/android-dev-images/android-dev-5/android-views2.png" alt="Android Views2">

---

### View implementation step by step

- _Button & Handle button click._

---

### Add View

- There is two way to add and edit UI components including views, you can use both XML code and designer pane.

- Add this code to the acitivty layout (XML):

```XML
<Button
    android:id="@+id/button1"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Button"
    tools:layout_editor_absoluteX="159dp"
    tools:layout_editor_absoluteY="432dp" />
```

- Or simply use the design pane by dragging the button to the editor.
- Pay attention to properties above like **id** and **text**.

---

### Declare and initialize the view on code

- To access the view from java code:

```Java
  //Declare new Button
  private Button myButton;

  //Link the Button (id same as XML id), R class contains the id's.
  myButton = findViewById(R.id.button1);

```

- You will need to import button widget.

- _TIP: Click Alt+Enter on Windows or Option+Shift on Mac to import._

---

### Manipulate View

- Function list:

<img width="600" src="/media/android-dev-images/android-dev-5/android-textview-subfunctions.png" alt="function list">

- Example onClickListner:

```Java
  //On Button Click
  myButton.setOnClickListener(new View.OnClickListener() {
      @Override
      public void onClick(View v) {
          //Do Something
      }
  });
```

---

### Button Click Source code

```Java
public class MainActivity extends AppCompatActivity {
    //Declare new Button
    private Button myButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //initialize Button (id same as XML id)
        myButton = findViewById(R.id.button1);

        //On Button Click
        myButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Do Something
                 Toast.makeText(getApplicationContext(), "Button Clicked!", Toast.LENGTH_SHORT).show();
            }
        });
    }
}
```

---

### Text display Source code

```Java
public class MainActivity extends AppCompatActivity {
    //Declare views
    private Button myButton;
    private EditText textInput;
    private TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //initialize views (id same as XML id)
        myButton = findViewById(R.id.button1);
        textInput = findViewById(R.id.edittext1);
        textView = findViewById(R.id.textView1);

        //On Button Click
        myButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //Display the Entered text on the text view
                textView.setText(textInput.getText().toString());
            }
        });
    }
}
```

---

### ViewGroup

- ViewGroup is the invisible container that groups a collection of Views (Button, TextView ... etc).
- ViewGroup is a subclass of View.
- Commonly used ViewGroup subclasses:
  - ConstraintLayout
  - LinearLayout
  - RecyclerView
- Legacy:
  - RelativeLayout
  - ListView
  - GridView

<img width="600" src="/media/android-dev-images/android-dev-5/android-view-group.png" alt="ViewGroup">

---

### Different layouts with different properties

- Constraintlayout: allows you to position and size widgets in a flexible way (best for responsive UI).
- LinearLayout: arranges other views either horizontally in a single column or vertically in a single row.
- RecyclerView: displays a scrolling list of elements based on large data sets.
- Legacy:
  - RelativeLayout: displays child views in relative positions, similar to ConstraintLayout.
  - ListView: displays a vertically-scrollable collection of views.
  - GridView: shows items in two-dimensional scrolling grid.

---

### ViewGroup implementation step by step

- _LinearLayout with Buttons Example_

---

### Add ViewGroup

- Use Design or the following XML:

- ```XML
  <LinearLayout
      android:layout_width="fill_parent"
      android:layout_height="fill_parent"
      android:orientation="horizontal"
      tools:layout_editor_absoluteX="1dp"
      tools:layout_editor_absoluteY="1dp">
  </LinearLayout>
  ```

- Add buttons to the layout to see it in action.

- ```XML
  <Button
      android:id="@+id/button1"
      android:layout_width="wrap_content"
      android:layout_height="wrap_content"
      android:layout_weight="1"
      android:text="Button" />
  ```
- Notice how the buttons positions side by side horizontally.

---

### Declare and initialize ViewGroups

- Access the LinearLayout from java code:

```Java
public class MainActivity extends AppCompatActivity {
    //Declare
    private LinearLayout buttonView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        //initialize
        buttonView = findViewById(R.id.linearlayout1);
    }
}
```

---

### Manipulate ViewGroup using subfunctions

```Java
//Examples:

//Hide ViewGroup
buttonView.setVisibility(LinearLayout.GONE);

//Add Buttons dynamically
buttonView.addView(newButton, LayoutParams);

//Remove Button
buttonView.removeView(myButton);

// And Much more ...
```

---

### More about User Interface & Interactions on the next lesson..
