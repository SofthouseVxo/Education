### Den delen ska ni lägga till på appen ni gör för projektet.

### Den här uppgiften till er som inte vet hur ni lägger till API kommunikation i eran app.

### Ni kan fortfarande använda era egna API:er eller andra API:er.

### Ni kan implementera det på ert så länge ni uppfyller kraven.

### API

- Skapa en ny Activity, ApiActivity.

- Lägg till 4 knappar, en listView och en TextView.

- Knapparna ska vara för GET,POST,PUT och Delete anropen.

- ListView:n ska vara för att visa använderna.

- TextView:n ska vara för att visa Resultatet av anropet.

- Lägg till en ny layout fil för custom dialog -> User_dialog.xml.

- Lägg till en ImageView och 3 TextViews på den nya layout:n.

- Skapa en Context menu för användarnas ListView.

- Context menu ska ha en item -> View Details.

- Custom dialog:n ska visas upp när man tycker på "View Details" tillsammans med användarens:

  - Bild/avatar på imageview:n.
  - Id på första TextView:n.
  - Fullständigt namn på den andra TextView:n.
  - Email på den sista TextView:n.

- Skapa en ny Java klass för användaren -> userModel.

- Den klassen ska vara model klassen för användaren, den ska användas för att spara user objekt för senare användning t.ex när vi vill visa detailjerna på custom dialog:n.

- Skapa en singleton klass för Volley så att vi använder en RequestQueue på hela applikationen.

---

- Knappen GET ska göra en get http request till endpoint:n -> https://reqres.in/api/users?page=2 .
  - Anropet retunerar data som är JsonArray med alla användare.
- Visa alla användare på listView:n med fullständigt namn d.v.s first_name + last_name.

---

- Knappen POST ska göra en post http request till endpoint:n -> https://reqres.in/api/users
  - POST datan kan t.ex vara id, namn och mail.
  - Anropet retunerar JsonObject.
- Visa resultatet på TextView:n och kontrollera att "createdAt" finns med svaret.

---

- Knappen PUT ska göra en put http request till endpoint:n -> https://reqres.in/api/users/2
  - PUT datan kan t.ex vara name, job.
  - Anropet retunerar JsonObject.
- Visa resultatet på TextView:n och kontrollera att "updatedAt" finns med svaret.

---

- Knappen DELETE ska göra en delete http request till endpoint:n -> https://jsonplaceholder.typicode.com/posts/1
  - Anropet retunerar tom JsonObject.
- Visa resultatet på TextView:n och kontrollera att symbolen "{}" visas på Textview:n.

### HJÄLP OCH TIPS

- Det finns två färdiga XML Filer för ApiAvtivity och för custom dialogen som du kan använda.

- Du kan hämta den valda item:t från listViewn med hjälp av AdapterView.AdapterContextMenuInfo:

- ```JAVA
    AdapterView.AdapterContextMenuInfo info = (AdapterView.AdapterContextMenuInfo) item.getMenuInfo();
  ```

- Skapa en global ArrayList av userModal typen och spara user objekt till den på din GET Request när du hämtar användare.

- Picasso biblioteket kan användas för bild rendering: https://github.com/square/picasso

- Sätt datan på custom dialog:n innan du visar det, t.ex textview.setText("") innan du kallar show() funktionen.
