### Steg för steg

1. Skapa en index.htmlmed basstruktur samt en index.js fil. Lägg dessa i en ny katalog.

1. Importera ```index.js``` i botten av ```body```.

1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.

1. Lägg till en knapp på sidan med innehållet "press me".

1. Ni skall nu ändra backgrundsfärgen på hela sidan när vi klickar på knappen. Börja med att koppla en eventlyssnare på knappen som lyssnar efter när någon KLICKAR på denna. Gör detta med ```addEventlistener()```.

1. Vid klick skall en ```toggleBackground()``` callback-funktion anropas. Denna funktion skall toggla bakgrundsfärgen på ```body```. 

1. Börja med att logga ifall funktionen körs. När detta har bekräftats så lägger ni in logik för följande:
<br>
Är bakgrundsfärgen ```.style.backgroundColor``` en tom sträng = sätt till färgen grön.
<br>
Är bakgrundsfärgen satt till grön = sätt till rosa.
<br>
Är bakgrundsfärgen satt till rosa = sätt till grön.

1. Skriv nu så att din ```toggleBackground(event)``` funktion tar emot en parameter som skrivet här på samma rad. Prova ```console.log(event)```. Inspektera vad detta event innehåller.

1. Använd nu ```event.target``` för att ändra färgen på knappen om man trycker på den.

1. Skapa nu en ny knapp, om man trycker på denna skall ni göra så att eventet ej lyssnas på längre.

1. Skapa en ny ```index2.js``` fil där ni klistra in följande script:

```
function one(one){
	let result = two(one, 2);
	return result;
}

function two(one,two){
	result = three(one, two);
	return result;
}

function three(one, two){
	return one+two;
}

let val = one(1);
```

1. Kör detta i webbläsaren, sätt ut breakpoints och kolla callstacken.

1. Gå till <a href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D">latentflip</a> och testa exemplet.

1. Skriv nu ett eget script i editorn som finns i länken ovan. Detta skall innehålla 3 olika funktioner som anropar varanda. Kör dessa och undersök.
## # Tänka själv

1. Lägg till en bild på din sida dynamiskt (dvs denna skall inte finnas i din HTML kod). Bilden läggs till när ert script körs och klickar man på bilden så skall bilden bytas ut mot en annan bild.
