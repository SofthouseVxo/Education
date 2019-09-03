## Labb Git

Detta är en labb för att komma igång med Git och versionshantering. Syftet är att ni skall sätta upp och komma igång med grundläggande versionshantering med Git. När laborationen är klar skall ni ha:
* Git installerat och konfigurerat på er dator
* Skapat ert första Repository
* Syncat detta på Github
* Föreberett ett repo för att lämna in uppgift 2.

OBS! $ tecknet används vanligvis för att signalera att det är ```command line``` kod och detta skall inte skrivas i er terminal.

1. Skapa ett Github konto.

1. Se till att du har [Git](https://git-scm.com/downloads) installerat och en terminal/kommandotolk öppen.

1. Skriv ```git --version``` i terminalen för att se att du har det installerat.

```
$ git --version
git version 2.17.1
```

2. Konfigurera git med ert namn och emailadress.
```
$ git config --global user.name "Ditt Namn"
$ git config --global user.email "din@mail.com"
```

3. Kontrollera att det funkat genom att köra.
```
$ git config user.name
$ git config user.email
```

4. Skapa nu en ny mapp/katalog som ni döper till ```git-project```.

```
$ mkdir <folder name>
```

5. Gå nu in i denna katalog ```$ cd <foldername>``` och kör ```$ git init```.

6. Kontrollera nu att det är ett repository genom att köra ```$ git status```.

7. Skapa nu en ```index.html``` fil i ert repository.

8. Kör ```$ git status```.

9. Kör nu ```$ git add index.html``` och sedan ```$ git status``` igen. Nu är din fil i staging.

10. Kör nu ```$ git commit -m"initial commit``` och sedan ```$ git status``` igen. Nu har du gjort din första commit.

11. Nu finns ditt repository och commits endast lokalt på din maskin. Det är nu dags att synca dett med Github. Har du inte har ett konto registrera ett på [Github](https://www.github.com).

12. Skapa ett nytt repository på GitHub. Detta döper ni till ```u2_html_<tre_första_bokstäverna_förnamn>_<tre_första_bokstäverna_efternamn>``` och som beskrivning skriver nu "Uppgift 2 - HTML & CSS". Detta repository skall vara publikt och ignorera sista frågan om README. Avsluta med att trycka på create.

13. Vi kommer nu till en sida med lite olika instruktioner. Vi har ett existerade lokalt repo vilket innebär att vi skall använda kommandona för **…or push an existing repository from the command line** Kopiera dessa och kör dem inuti ditt lokala repo.

14. Gå tillbaka till webbläsaren och tryck refresh. Kontrollera att din index.html fil nu syns i ditt repo.

15. Öppna nu ditt lokala repo i ett IDE och skapa grunden för din index.html.

16. Gör intruktionerna från punkt 8 - 10. Fast ändra commit meddelande dvs använd inte "initial commit" utan skriv ett eget som beskriver vad ni gjort för ändringar.

17. Kör nu ```$ git status``` och sedan ```$ git log``` för att se alla commits.

18. När detta är klart kör ni ```$ git push```. Gå nu till Github och kontrollera att er ```index.html``` har uppdaterats.

19. Clona nu ner Education Repositoryt där all övningar samt exempelkod från föreläsningar finns. Detta gör du genom att gå till repositoryts webbplats (länken finns i varje föreläsning) på Github. Till höger finns det en grön knapp som det står "clone or download". Kopiera länken, i din terminal går du till en plats där du vill ha repot och skriver ```git clone``` uppföljt av länken.

20. Du är nu klar, kopiera länken till ditt Github repository och skicka in på Ping Pong under "Labb Git" under examinationer.

##### Extrauppgifter

1. Gå till Github och skapa därifrån ett nytt repository.

1. Följ instruktionerna.

1. När du har clonat ner repot lokalt så skapar du en index.html fil i repot.

1. Stage'a och committa.

1. Kör git log för att se dina commits, samt git status för att se om allt har kommit med i din commit.

Fortsättning följer...

##### Bra att veta

* Om du glömmer -m vid en commit kommer du att hamna i vim editorn. För att lämna denna skriver du ```:wq```
* Vill man slippa skriva in sitt lösenord till github hela tiden så kan man fixa en SSH nyckel: [How to](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)