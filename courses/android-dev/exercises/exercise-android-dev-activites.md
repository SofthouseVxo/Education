### Exercises

1. Vilka Acitivty lifecycle metoder finns det och vad används de till?

2. Var ska cpu krävande funktioner/operations finnas i lifecycle:n (vilken metod)?

3. Var ska man avallokera resurser och var ska man allokera de igen om de behövs?

4. Kommer onDestory() metoden alltid att kallas när appen stängs/kraschar/force-shudown?

5. Vilka lifecycle metoder kan dödas?

6. Vad ska man använda savedInstanceState till?

7. Lägg till en TextView som behåller data efter enhetens rotation har ändrats med hjälp av savedInstanceState.

8. Vad är SharedPreferences på android och i vilken format sparas datan?

9. Vad är skillanden mellan SharedPreferences och savedInstanceState?

### Labs:

1. Skapa en enkel inloggning Activity med:

   - Två EditText.(username & password)
   - Klickbar Knapp för logga in.
   - Skapa en till Activity med TextView och en logga ut knapp.
   - Skicka användaren till den andra Activity:n när knappen logga in blir nedtryckt.
   - Användarens username ska stå på den andra Activity:ns TextView.

2. Använd Android SharedPreferences för att:
   - Spara användarens inloggning session.
   - d.v.s om appen stängs ner och starts igen användaren ska fortsätta vara inloggad.
   - Om användaren väljer att logga ut så ska SharedPreferences tömas.
