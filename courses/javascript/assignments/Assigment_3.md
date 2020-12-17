# Labration (Deadline: 2021-01-04 kl 00:00)

## Inledning

- Ni ska Skapa en enkel rekryterings applikation med React.
- Applikationen ska ha en lista med personer som kan se på startsidan och en knapp för att lägga till en ny person.
- Titta på bilden nedan:
  <img style="max-width: 700px" src="/media/javascript-images/javascript-s1/employee-react.gif" alt="run example">

#### Checkpoints

1. Appen ska ha två komponenter:
   - **EmployeeList**: Denna komponenten ska ha ett state där datan om olika personer lagras samt visa en lista med personer på sidan. (Tip: använd map)
   - **Employee**: Denna komponenten ska presentera varje person, den ska ta emot state data via en prop. (Statet ska skickas från **EmployeeList**).
2. Varje person ska ha name, email, phone, skills och avatar (titta på objektet nedan):

   - ```JavaScript

      {
      name: "",
      email: "",
      phone: "",
      skills: "",
      avatar: "",
      }
     ```

3. avatar är en bild, ni kan skriva en direkt länk till bilden. Bilder hittar ni här : https://imgur.com/a/TfuJ77a
4. Statet som finns på **EmployeeList** ska börja med 3 personer som default värde på statet.
5. **EmployeeList** ska han en knapp (Add Employee) som lägger till en ny person på listan, personens information kan ni hårda koda.

### För betyget Godkänd krävs följande:

1. Appen ska vara en single page, bara en sida.
2. Ni har skapat **Employee** och **EmployeeList** som komponenter.
3. App komponenten (hela applikationen) ska bara ha en komponent (**EmployeeList**).
4. Statet som innehåller personernas data ska finnas på **EmployeeList** komponenten.
5. **Employee** komponenten ska presentera all information on personen D.v.s name, email, phone, skills och bilden (avatar).
6. Ni har använt inbyggda React funktioner (t.ex ingen direkt modifiering av statet med push .. osv).
7. node_modules ska ignoreras av git D.v.s den ska inte finnas med på github repo:t (lägg till mappen i .gitignore filen).

### Inlämning:

- Du ska endast lämna in en länk till github repo:t där koden finns (ingen zip/rar filer).
- Tänk på att node_modules ska inte vara med på repo:t.

### TIPS & Hjälp

- Statet ska vara en array av objekt, [{},{},{}].
- Använd useState(), map().
- Avnänd object/array destruction och spread operator.
- Länkar:
  - https://reactjs.org/docs/hooks-overview.html#state-hook
  - https://reactjs.org/docs/components-and-props.html#function-and-class-components
  - https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
