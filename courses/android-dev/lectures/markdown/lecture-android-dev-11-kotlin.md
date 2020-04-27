### Kotlin

---

### Topic

- What is Kotlin?
  - Kotlin Syntax
  - Kotlin on Android
- The Pros of Using Kotlin
- The Cons of Kotlin
- Kotlin use cases

---

### What is Koltin?

- Programming language designed for the JVM and Android.
- General purpose, free, open source and statically typed.
- Combines object-oriented and functional programming features.
- Focused on interoperability, safety and clarity.
- Created by JetBrains, the company behind IntelliJ IDEA, in 2010.

<img width="600" src="/media/android-dev-images/android-dev-11/android-dev-kotlin.png" alt="Kotlin">

---

### Kotlin Syntax

- ```Java
    fun main(args: Array<String>) {
        println("Hello World!")
    }
  ```

- ```Java
    fun sum(a: Int, b: Int): Int {
        return a + b
    }
  ```

- ```Java
    class Person {
        var name = "Anne"
        var age = 32
    }
  ```
- ```Java
    fun maxOf(a: Int, b: Int): Int {
        if (a > b) {
            return a
        } else {
            return b
        }
    }
  ```

---

### Kotlin & Java Syntax

- Less Code.
- No bolierpalte.

<img width="800" src="/media/android-dev-images/android-dev-11/android-dev-java-kotlin.png" alt="Kotlin & Java syntax">

---

### Kotlin on Android

- Android Studio fully supports Kotlin.
- Kt file type.
- ```Java
    class MyActivity : AppCompatActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(savedInstanceState)
            setContentView(R.layout.activity)
        }
    }
  ```

<img width="800" src="/media/android-dev-images/android-dev-11/android-dev-kotlin-activity.png" alt="Kotlin Activity Overview">

---

### The Pros of Using Kotlin

- Increased team productivity.
- interoperability, coordinates with Existing Java Code.
- Easily maintained.
- More Reliable.
- Easy to Learn.

---

### The Cons of Kotlin

- Few Kotlin Experts.
- Slow Compliation time.
- Small Developer community.
- New features, may experience an occasional bugs.

---

### Kotlin use cases:

- Few amazing apps written in Kotlin:
- Pinterest: a mobile app for the popular creative idea sharing social app.
- Trello: a visual tool for organizing work with customizable to-do lists.
- Uber, Netflix & Google.

---
