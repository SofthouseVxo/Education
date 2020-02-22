<!doctype html>
<html>
	<head>
		<title>JavaScript Exercises</title>## 2.JavaScript - Scripting

### Steg för steg

          I denna övningsuppgift skall ni inte skriva någon kod utan ni ska få träna på hur man tänker som en programmerare. Att tänka på när man skriver ett script är att datorn kommer att göra precis vad ni säger till den, varken mer eller mindre. Det finns ingen magi.
          
          1. Vad är ett script? Jo det är en serie av instruktioner som en dator kan följa för att nå ett mål eller utföra en uppgift.
          
          1. Tänk ut tre olika scenarios från verkliga livet där detta sker? Ett första kan vara ett recept.
          
          1. Det första man behöver när man skall skriva ett script är ett mål, något man vill uppnå. I detta fallet har vi en gästlista med gäster.
          
          1. Varje gäst har följade information:
          <br>- Förnamn
          <br>- Efternamn
          <br>- Ålder
          <br>- Datum för när de bokade biljetten
          
          1. Det finns 500 gäster totalt, den här listan är sorterad efter när gästerna hade anmält sig till festen. Att hitta en gäst eller en samling gäster här hade både tagit tid och energi. Så nu skall vi planera ett script för att lösa detta smidigt.
          
					1. Till att börja med skall vi sortera ut alla gäster som är under 25. 
					
					1. Vad behöver datorn för information för att lösa detta? Skriv allt du kan tänka dig.
          
					1. Nu skall vi skapa en ny lista och denna skall innehålla:
					<br>- alla gäster vars förnamn startar på P, 
					<br>- bokade sin biljett bland de 200 första och är under 25. 
					 
					1.Hur skulle ni ha skrivit dessa instruktioner för datorn? Skriv ner rad för rad.
          
          1. Tänk er nu att ni skall köpa ett par byxor i en butik. Ni skall förklara detta händelseförlopp för en dator, fundera över vad den behöver veta och vad som händer.
          
          1. Gör samma sak fast med dessa olika scenarios
* Fotbollsdomare som dömer straff
* Trädgårsarbetare planerar ett träd
* Kock kokar en soppa
          
          ### Skriv ditt första script
          
### Steg för steg
				
        1. Skapa en index.html och en index.js fil, lägg dessa i en ny katalog.
          
          1. I ```head``` lägger ni till ```script``` och inuti denna skriver ni ```alert('Hello world!');```.
          
          1. Öppna nu index.html i webbläsaren och kontrollera att det kommer upp en popup med texten "Hello world!".
          
          1. Flytta nu ```alert('Hello world!');``` till index.js och ta bort ```script``` från ```head```.
          
          1. Importera nu index.js i ```head``` genom att skriva ```script src="index.js"```.
          
          1. Öppna webbläsaren igen och uppdatera sidan. Kontrollera att popupen fortfarande dyker upp.
          
          1. Grattis ni har nu skrivit och kört ert första script!
