### 4.Android development
#### Getting Started

---

#### Android development overview

* Project Overivew
* AndroidManifest
* Java code
* Layouts
* build process

---

#### Exploring a project

* app
* src
* main
  * java
  * res
    * layout | mipmap.. | values
  * AndroidManifest.xml

---

#### Exploring a project

<img width="500" src="/media/android-dev-images/android-dev-4/android-project-overview.png" alt="project overview">

---

#### Exploring a project

* _app_ directory is the root directory of all files directly related to your app.
* _src_ directory contains all of the source code for your Android app.
* _main_ directory you have two directories named java and res:
  * _Java_ directory is the root of the Java source code for the Android app, contains java packages & classes.
  * _res_ directory contains all the non-Java sources for the Android app such as XML files and image files.
* _mipmap.._ contains the images for use with different screen resolutions.
* _layout_ contains the layout XML files used by the app. Layout XML files are typically used by activities, fragments and by some ViewGroups.
* _values_ contains XML files with value definitions.

---

#### Exploring a project

<img width="500" src="/media/android-dev-images/android-dev-4/android-project-structure.png" alt="project structre">

---

#### AndroidManifest.xml

* AndroidManifest contains all component declarations.
* The Android system reads the manifest file to know which component exists before it starts the app component.
* The manifest does the following:
  1. Names the Java package for the application (unique identifier).
  1. Describes the components of the application such as the activities, services, broadcast receivers, and content providers.
  1. Declares which permissions the application must have in order to access protected parts of the API, access to the camera.
  1. Lists the libraries that the application use.

---
#### AndroidManifest.xml

```XML
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.example.myfirstapp">

    <application
            android:allowBackup="true"
            android:icon="@mipmap/ic_launcher"
            android:label="@string/app_name"
            android:roundIcon="@mipmap/ic_launcher_round"
            android:supportsRtl="true"
            android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN"/>

                <category android:name="android.intent.category.LAUNCHER"/>
            </intent-filter>
        </activity>
    </application>

</manifest>
```

---

#### AndroidManifest.xml

* Android namespace and application tag
* App package name, icon, theme and the main acitivty.

---

#### Java code

Components are written in Java and should be in the main/java folder.

```Java
//Each module name begins with the domain name:
package com.example.exampleapp;

//imports such as:
import android.support.v7.app.AppCompatActivity;

//And class declaration with extends (inheritance)
public class MainActivity extends AppCompatActivity {
...
}
```

Check the API reference for any imported libraries you don't know.

[API Reference](https://developer.android.com/reference)

---

#### Layouts

* Layout resources are written in XML and should be within the layout folder in the res folder.
* Open the Activity XML file to see the layout file in the editing pane.

_You can switch between XML code and the design pane using the icons on the top right corner_

<img width="700" src="/media/android-dev-images/android-dev-4/android-xml-editor.png" alt="XML Editor pane">


---

#### Build Process

* The build process involves tools and processes that automatically convert each project into an APK.
* Android Studio uses Gradle as the foundation of the build system.

* To add a dependency to your project, specify a dependency configuration in the dependencies block of your _build.gradle_ file.

```Java
apply plugin: 'com.android.application'

android { ... }

dependencies {
    // Dependency on a local library module
    implementation project(":mylibrary")

    // Dependency on local binaries
    implementation fileTree(dir: 'libs', include: ['*.jar'])

    // Dependency on a remote binary
    implementation 'com.example.android:app-magic:12.3'
}
```