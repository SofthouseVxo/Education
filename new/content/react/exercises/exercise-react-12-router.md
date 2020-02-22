<!doctype html>
<html>
	<head>
		<title>React Exercises</title>##  12. React - Router
					
					1. Skapa ett nytt React-projekt med hjälp av create-react-app ```npx create-react-app router-playground```

					1. ```cd router-playground```
					
					1. starta react applikationen på en lokal webbserver och öppna i webbläsaren ```npm start``` alternativt ```yarn start```
					
					1. Börja med att gå till App.js och rensa all inuti ```<div className="App">```.

					1. Installera react-router via npm <a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">react-router</a>

					1. Skapa två komponenter som skall innehålla en varsin sida (page). ```ProfilePage``` och ```SettingsPage```.

					1. Skapa nu en navigationsmeny inuti ```App```komponenten, denna skall längst upp på sidan. Denna skall innehålla länkar till de två sidorna du skapat ovan.

					1. Sätt nu upp en router i ```App``` innehållande 3 routes. ```"/","/profile","/settings". Dessa skall göra så att respektive Page visas.

					1. ```"/"``` skall visa profilsidan.

					1. Gör nu om denna till en ```<Switch></Switch>```.

					1. Gör nu så att du kan skicka med en parameter till profilsidan.

					1. Ta emot och rendera denna på profilsidan.

