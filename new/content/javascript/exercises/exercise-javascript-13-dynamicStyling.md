<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>##  13.JavaScript - Dynamic styling

### Steg för steg
				
        1. Skapa en index.htmlmed basstruktur samt en index.js fil. Lägg dessa i en ny katalog.
					
					1. Importera ```index.js``` i botten av ```body```.
					
					1. Allt ni skriver i HTML-koden lägger ni ovanför script-taggen.
					
					1. Skapa nu nedan struktur med hjälp av ```createElement()```, ```appendChild()``` och  att sätta ```textContent```.
					
					```HTML
	
						<div>
							<h1>I'm awesome</h1>
							<a>w3schools</a>
							<button>Press me, or don't!</button>
						</div>
	---
					```
					
					5. Kontrollera nu om ```<a>w3schools</a>``` elementet har ett "href" attribut med hjälp av ```.hasAttribute();```.
					
					6. Använd ```setAttribute``` för att ge ```<a>w3schools</a>``` en href som ni anger till att vara ```https://www.w3schools.com/jsref/dom_obj_attributes.asp```.
					
					7. Vi skall nu ge knappen en ny bakgrundsfärg dynamiskt. Dvs efter att sidan har laddats. Spara nu en referens till knappen i en variabel och använd den för att ge knappen en ny ```style.backgroundColor``` och sätt denna till blå.
					
					8. Sätt nu knappens textfärg till vit så att vi ser texten tydligt. Testa först att göra detta med ```setAttribute()``` och passa in ```'style'``` och ```'color: #FFF;'``` som argument. Vad får du för resultat?
					
					9. Lös detta genom att direkt efter ```'color: #FFF;'``` ange ```background-color: blue;'```. Spara och se att ni får önskat resultat. Vilka slutsatser kan ni dra?
					
					10. Skapa nu en ```style.css``` och länka denna inuti ```head```. I denna skapar ni en selector av typen klass som ni döper till ```.my-header```. Denna skall innehålla styling för att sätta textfärgen till röd.
					
					11. Ge nu er ```<h1>``` denna klassen genom att använda ```.className```.## # Tänka själv

					* Skapa nedan bild dynamiskt på er sida, dvs inget av elementen skall finnas i er HTML-kod innan ert script körs.

					<img style="width: 600px;" src="media/jumbo.png" alt="jumbo image">
					
