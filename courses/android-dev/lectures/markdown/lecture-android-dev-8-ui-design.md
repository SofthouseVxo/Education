### XML & UI design

- Your app's user interface is everything that the user can see and interact with.

---

### Topics

- XML
  - Introduction
- Flexible layout
  - ConstraintLayout
  - Landscape mode
- Accessibility
- RecyclerView

---

### XML

- XML: Extensible Markup Language
- Simple and follows only a few set rules
- Used more to describe data and in this case, layouts.
- XML control presentation data.
- Describes the views in your activities.
- Define constants, colors, theme and translations.

---

### XML Structre

- Opening and closing tags.
- Elements, arrtibutes and values.
- Every View and ViewGroup object supports their own variety of XML attributes.
- Any View object may have ID associated with it, to uniquely identify it.

- ```XML
    <Button
                android:id="@+id/button1"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="100dp"
                android:text="Exit App" />
  ```
- ```Java
    //Load the XML Resource
    setContentView(R.layout.main_layout);
    //create an instance of the view object and capture it from the layout
    Button myButton = (Button) findViewById(R.id.my_button);
  ```

---

### Responsive UI & Flexible layout

---

### ConstraintLayout

- Newer version of LinearLayouts or RelativeLayouts.
- Simplifies creating complex layouts.
- Better performance.
- Best way to create a responsive layout for different screen sizes.
- Use the Layout Editor in Android Studio.

---

### ConstraintLayout tools (Demo)

- <img width="600" src="/media/android-dev-images/android-dev-8/android-dev-layout-tools.png" alt="Layout tools">
- Turn on design and bluprint.
- NOTE: layout_editor attribute.
- Try: Manuel align and margin.
- Try: clear constraints, Infer constraints, align constraints.
- Change the device for preview.

---

### Landscape Mode

- Separate Layout Files for Landscape Mode.
- Click on Orientation preview -> Create Other -> Orientation -> Landsacpe.
- Possibility to create layout for a specific requirement, screen size .. etc.
- <img width="400" src="/media/android-dev-images/android-dev-8/android-dev-landport.png" alt="Android Orientation example">

---

### Accessibility in Android

- Serving all types of users.
- Android apps should aim to be usable by everyone, including people with accessibility needs.

---

### Accessibility

- Increase text visibility.
- Choose the right font.
- Fix all layout warnings.
- <img width="500" src="/media/android-dev-images/android-dev-8/android-dev-layout-debug.png" alt="Layout debug">

---

### Accessibility

- Use large & simple controls.
- Touch target size
  - Make sure buttons and selectable areas are of sufficient size for users to easily touch them.
  - at least 48dp ✕ 48dp.
- ```XML
    <ImageView
    android:paddingLeft="4dp"
    android:minWidth="40dp"
    android:paddingRight="4dp"
    android:paddingTop="8dp"
    android:minHeight="32dp"
    android:paddingBottom="8dp" />
  ```
- Label user interface controls:
  - Describe each UI element
  - using android:contentDescription
- ```XML
    <ImageView
    android:id="@+id/add_note_button"
    android:src="@drawable/add_note_image"
    android:contentDescription="@string/add_note_description"/>
  ```

---

### Use the Values folder in resources

- Define strings, colors and styles to easliy control your app and make it support different languages.
- <img width="500" src="/media/android-dev-images/android-dev-8/android-dev-values-folder.png" alt="Values folder">

---

### RecyclerView

- Advanced version of the ListView with improved performance and other benefits.

---

### RecyclerView implementation

- What we need:
- Data source: arrays, ArrayList, database .. etc.
- Custom adapter: RecyclerView.Adapter.
- Custom layout for items.

---

### RecyclerView implementation

- Data source
- ```Java
  //I.e:
  ArrayList<String> data = new ArrayList<>();
  String data [] = {""};
  ```

---

- Custom Adapter
- ```Java

  public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {

    public MyAdapter(){
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        return null;
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, final int position) {
    }

    @Override
    public int getItemCount() {
        return 0;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
        }
    }
  }
  ```

---

### RecyclerView implementation

- Custom layout:

```XML
 <?xml version="1.0" encoding="utf-8"?>
 <androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
     xmlns:app="http://schemas.android.com/apk/res-auto"
     xmlns:tools="http://schemas.android.com/tools"
     android:id="@+id/row_layout"
     android:layout_width="match_parent"
     android:layout_height="wrap_content"
     android:layout_margin="10dp">

     <androidx.cardview.widget.CardView
         android:layout_width="0dp"
         android:layout_height="wrap_content"
         app:layout_constraintEnd_toEndOf="parent"
         app:layout_constraintStart_toStartOf="parent"
         app:layout_constraintTop_toTopOf="parent">

         <androidx.constraintlayout.widget.ConstraintLayout
             android:layout_width="match_parent"
             android:layout_height="wrap_content"
             android:background="#D5D5D5">

             <ImageView
                 android:id="@+id/row_image"
                 android:layout_width="wrap_content"
                 android:layout_height="wrap_content"
                 android:layout_marginStart="8dp"
                 android:layout_marginLeft="8dp"
                 android:layout_marginTop="16dp"
                 android:layout_marginBottom="16dp"
                 app:layout_constraintBottom_toBottomOf="parent"
                 app:layout_constraintStart_toStartOf="parent"
                 app:layout_constraintTop_toTopOf="parent"
                 app:srcCompat="@drawable/ic_launcher_background" />

             <TextView
                 android:id="@+id/row_title"
                 android:layout_width="wrap_content"
                 android:layout_height="wrap_content"
                 android:layout_marginStart="32dp"
                 android:layout_marginLeft="32dp"
                 android:text="TextView"
                 android:textAppearance="@style/TextAppearance.AppCompat.Large"
                 app:layout_constraintBottom_toBottomOf="parent"
                 app:layout_constraintStart_toEndOf="@+id/row_image"
                 app:layout_constraintTop_toTopOf="parent" />
         </androidx.constraintlayout.widget.ConstraintLayout>
     </androidx.cardview.widget.CardView>

 </androidx.constraintlayout.widget.ConstraintLayout>
```

---

### Questions/need help?
