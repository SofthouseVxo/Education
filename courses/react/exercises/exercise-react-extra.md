## React - Extra exercise

* Känner ni att ni vill repetera basics så rekommenderar jag er att göra [interactive tic-tac-toe](https://reactjs.org/tutorial/tutorial.html). Annars kan ni fortsätta med nedan.

1. Skapa ett nytt projekt med hjälp av create-react-app.

1. Skapa 3 screens (komponenter). Döp dem till ```StartScreen```, ```ProfileScreen``` och ```UsersScreen```.

1. Börja med att skapa en navigation så det är möjligt att navigera emellan alla screens.

1. Vi skall nu använda https://reqres.in/ APIt. Börja med att hämta alla användare i ```UsersScreen```.

1. För varje användare vill vi nu skapa ett ```Card```. Detta är en komponent som ni kommer skapa. ```Card``` skall visa all information om användaren inklusive avataren.

1. I ```StartScreen``` lägger ni nu till funktionalitet så att användaren skall kunna logga in. Använd https://reqres.in/ även här.

1. ```ProfileScreen``` skall visa inloggad användare. Denna visas i samma ```Card``` som används i ```UsersScreen```. Reflektera över vart sparad användare skall sparas någonstans. Hook, HOC, Context, Render Props eller kanske Redux?

1. Om användaren navigerar till ```ProfileScreen``` utan att ha loggat in så skall det visas en ```Popup``` som berättar att man ej är inloggad och 5 sekunder därefter skall man redirectas tillbaka till ```StartScreen```. Denna ```Popup``` skall var en egen komponent.

1. Bryt nu ut inputfälten så att varje input är en ```Input``` komponent innehållande logik och styling för ett inputfält.

1. Gör likadant för inloggningsknappen.

1. Ändra nu i din popup så att det istället visas ett inputfält med och en knapp. I inputfältet kan man skriva in vilken route man vill navigera till. Använd dina nyligen skapade komponenter.

1. När man klickar på knappen i ```Popup``` så skall man navigeras till den sida som skrivits in.