<!doctype html>
<html>
	<head>
		<title>2.UX - Design the process</title>
		<meta charset="utf-8">
		<meta name="robots" content="noindex, nofollow">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		
		<link rel="stylesheet" href="../../libs/reveal/css/reset.css">
		<link rel="stylesheet" href="../../libs/reveal/css/reveal.css">
		<link rel="stylesheet" href="../../libs/reveal/css/theme/softhouse.css">

		<link rel="stylesheet" href="../../libs/bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="../../style.css">

		<script src="../../libs/jquery/jquery.min.js"></script>
		<script src="../../libs/bootstrap/js/bootstrap.min.js"></script>


		<!-- Theme used for syntax highlighting of code -->
		<link rel="stylesheet" href="../../libs/reveal/lib/css/monokai.css">
	</head>
	<body>
		<nav class="navbar navbar-expand-lg  navbar-dark bg-dark fixed-top shadow-lg">
			<a class="navbar-brand" href="https://www.softhouse.se">
				<?xml version="1.0" encoding="utf-8"?>
				<!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					viewBox="0 0 928 179" style="enable-background:new 0 0 928 179;" xml:space="preserve">
				<style type="text/css">
					.st0{fill:#FFFFFF;}
				</style>
				<g>
					<path class="st0" d="M795,121.4c-9.5,4.3-6.3,24.8-15.8,31.6c-5.3,3.8-31,4-34.3-3.8c-4.7-11.1,30.2-28.8,23.5-38.9
						c-8.6-12.9-58.5-8.8-61.6-18c-1-3.1,7-17.5,17.7-18.8c11.8-1.9,31.6,19.9,48.2,19.4c32.2-1.1,34.9-51.8,58.5-58
						c20.7-5.4,37.6-1.6,38.8,7.3c2.2,17.3-59.7,45.1-55.8,59.8c4.9,18.6,74.6,26.4,73.8,41.5c-0.4,7.2-13.7,12.5-25.1,9.6
						C840.6,147.4,818.1,111,795,121.4 M866.5,166.7c20.8,6.4,53.4,1.7,54.2-13.4c1.5-30.6-93.3-36.1-99.1-53
						c-3.8-11.2,85.4-49.2,83.1-73.3c-1.4-15.1-33.7-18-62.2-12.1C787.6,26,807.3,84,772.8,86.7c-14.9,1.2-32.8-26.1-54.2-26.1
						c-13.9,0-33,25.6-30.3,33.2c5.8,16.9,63.6,6.4,73.2,20.1c5.8,8.2-36,26.9-27.8,45.2c4.6,10.2,40.9,14.6,52.1,5
						c9.3-7.9,4.9-34.5,12.1-37.7C814.7,119,839.5,158.4,866.5,166.7"/>
					<path class="st0" d="M62.8,101.3H21.3v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H11v-8.7h42.7l0-10.7H23.3
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M571.8,101.3h-41.4v9.8h30.5c9.3,0,12.2,2.2,12.2,11v6.4c0,8.7-2.9,11-12.2,11H520v-8.7h42.7v-10.7h-30.4
						c-9.2,0-12.3-2.2-12.3-11v-5.1c0-8.8,3.1-11,12.3-11h39.4V101.3z"/>
					<path class="st0" d="M81.5,103.9v24.5c0,8.8,2.9,11,12.2,11H130c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11H93.7
						C84.5,92.9,81.5,95,81.5,103.9 M93,101.5h37.9v29H93V101.5z"/>
				</g>
				<polygon class="st0" points="159.8,92.9 209.3,92.9 209.3,101.3 171.3,101.3 171.3,113.4 197.2,113.4 197.2,122.1 171.3,122.1
					171.3,139.5 159.8,139.5 "/>
				<polygon class="st0" points="256.5,139.5 245.1,139.5 245.1,101.3 222.6,101.3 222.6,92.9 279.3,92.9 279.3,101.3 256.5,101.3 "/>
				<polygon class="st0" points="292.5,92.9 304,92.9 304,110.6 339.7,110.6 339.7,92.9 351.2,92.9 351.2,139.5 339.7,139.5
					339.7,119.9 304,119.9 304,139.5 292.5,139.5 "/>
				<g>
					<path class="st0" d="M368.6,103.9v24.5c0,8.8,2.9,11,12.2,11h36.3c9.2,0,12.2-2.2,12.2-11v-24.5c0-8.9-3-11-12.2-11h-36.3
						C371.6,92.9,368.6,95,368.6,103.9 M380.1,101.5h37.8v29h-37.8V101.5z"/>
					<path class="st0" d="M458.3,130.8H491V92.9h11.5v35.5c0,8.7-3,11-12.3,11h-31.1c-9.3,0-12.2-2.3-12.2-11V92.9h11.4V130.8z"/>
				</g>
				<polygon class="st0" points="590.5,92.9 640.9,92.9 640.9,101.2 602.1,101.2 602.1,111.3 627.1,111.3 627.1,119.4 602.1,119.4
					602.1,130.8 641.5,130.8 641.5,139.5 590.5,139.5 "/>
				</svg>
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav m-auto">
					<script src="../../navigation.js"></script>
				</ul>
			</div>
		</nav>

		<div class="reveal">
			<div class="slides">

					<h3>2. Design</h3>
					<h5>Design en process</h5>

---


					<h3>Vad tänker ni när ni hör ordet design?</h3>

---


#### Design definitioner</h4>
					<p>“Design är en arbetsprocess för att utveckla lösningar på ett medvetet och innovativt sätt där både funktionella och estetiska krav ingår med utgångspunkt från brukarens behov. Design tillämpas för utveckling av varor, tjänster, processer, budskap och miljöer.” SVID</p>

---


#### Design definitioner</h4>
					<p>“A design is a construction or activity specification or plan, or the result of that plan in the form of a prototype, finished product, or process.” - Wikipedia</p>

---


#### Design definitioner</h4>
					<p>“Realization of a concept or idea into a configuration, drawing, model, mould, pattern, plan or specification (on which the actual or commercial production of an item is based) and which helps achieve the item's designated objective(s).” - Business dictionary</p>

---


#### När använder vi oss av design?</h4>
					<ul>
						<li>När vi vill göra verklighet av en idé.</li>
						<li>När vi vill skapa något som löser ett problem.</li>
						<li>När vi har blivit tilldelade en uppgift, men stegen för att nå vårt resultat inte är klart.</li>
						<li>Syftet med en designprocess är att forma och guida arbetet för att få ett bättre resultat.</li>
					</ul>

---


#### Varför är det viktigt med en designprocess?</h4>
					<ul>
						<li>Sannolikheten för att din produkt uppfyller sitt syfte blir större.</li>
						<li>Sannolikheten för att dina användare förstår och använder din produkt blir större.</li>
						<li>Risken för obekväma överraskningar när produkten väl möter användarna minskar.</li>
					</ul>

---


#### Designroller</h4>
					<h5>User Experience (UX) designer</h5>
					<p>En UX designer fokuserar på hur en produkt känns, upplevs samt om denna fyller sitt syfte. UX designers uppgifter kan variera från att göra User research, Product research, Personas, Scenarios, Skapa content, Testa och validera till att sälja in och presentera designbeslut.</p>

---


#### Designroller</h4>
					<h5>User Interface (UI) designer</h5>
					<p>Till skillnad från UX designern så fokuserar UI designern på hur produkten skall se ut och presenteras. De designar varje skärm/sida så att gränssnittet kommunicerar den väg som UX designern har tagit fram.</p>

---


#### Designroller</h4>
					<h5>Interaktionsdesigner</h5>
					<p>Fokuserar på hur produkten skall fungera. Att produktens gränssnitt skapar de effekter användaren förväntar sig i olika situationer och ansvarar för alla designbeslut om interaktionen mellan produkten och användaren.</p>

---


					<h3>Processer</h3>

---


#### Vattenfallsmetoden</h4>
					<img style="width: 700px;" src="../../media/ux-images/ux-2/vattenfall.png" alt="waterfall">

---


#### Vattenfall exempel</h4>
					<ul>
						<li>Kravspecifikation tas fram tillsammans med kund.</li>
						<li>Sätter en deadline om ett år.</li>
						<li>Utveckling fortgår under en längre tid utan kontakt med kund.</li>
						<li>Ett år senare levereras produkt (kanske).</li>
					</ul>

---


#### Vattenfall - risker</h4>
					<ul>
						<li>Tekniken förändras snabbt idag (webbsida, native app, PWA osv.)</li>
						<li>Scopet kan ändras, kund kommer på att de vill ha nya features.</li>
						<li>Målgruppen kanske har bytts ut.</li>
						<li>Att estimera hur lång tid något man inte gjort innan är väldigt fruktansvärt svårt.</li>
					</ul>

---


#### Vattenfallsmetoden är sällan lämplig för mer avancerade produkter inom mjukvaruutveckling.</h4>

---


#### Iterativ process</h4>
					<ul>
						<li>Iterera = att upprepa.</li> 
						<li>Genom upprepning kan vi testa och förfina vår produkt.</li>
						<li>För varje upprepning kan vi lära oss hur vi kan göra saker bättre och eller annorlunda.</li>
					</ul>

---


#### Vilka steg vill vi iterera?</h4>
					<ul>
						<li>Skapa förståelse (användaren, produkten, syfte)</li>
						<li>Visualisera (Skapa designkoncept)</li>
						<li>Realisera designkoncept (skapa skisser, prototyper)</li>
						<li>Testa och utvärdera (användartester)</li>
						<li>Förfina och förbättra (utifrån tester)</li>
					</ul>

---


#### Iterativ process</h4>
					<img src="../../media/ux-images/ux-2/iterativ.png" alt="iterative process">

---


#### Skapa förståelse</h4>
					<ul>
						<li>Vad skall systemet göra?</li>
						<li>Vilka är mina användare?</li>
						<li>Passas systemet in med saker i sin omgivning?</li>
						<li>Vilka krav, möjligheter och begränsningar finns?</li>
					</ul>

---


#### Visualisera - Realisera</h4>
					<ul>
						<li>Vi behöver visualisera våra koncept och ideér för att tydliggöra för att folk.</li>
						<li>Att göra verklighet av ideér</li>
						<li>Detta underlättar för att kunna utvärdera.</li>
						<li>Detta kan man göra med hjälp av olika medier, det viktigaste är att välja rätt medie för att få svar på de frågor/oklarheter som behöver besvaras.</li>
						<li>Skisser, bilder, pappersprototyper, digitala prototyper (low-fi, hi-fi)</li>
					</ul>

---


#### Testa - Utvärdera</h4>
					<ul>
						<li>För att se om ett koncept eller design fungerar som vi tänkt behöver vi test och utvärdera dessa.</li>
						<li>Detta kan vi göra genom att exempelvis testa direkt mot användaren, studera användaren eller skapa fokusgrupper m.m.</li>
					</ul>

---


#### Exempel på hur stegen en iterativ process kan se ut:</h4>
					<ul>
						<li>Varv 1 - Skisser på koncept.</li>
						<li>Varv 2 - Pappersprototyper / wireframes.</li>
						<li>Varv 3 - Digitala wireframes.</li>
						<li>Varv 4 - Statisk digital prototyp.</li>
						<li>Varv 5 - Dynamisk digital prototyp.</li>
						<li>Varv 6 - Faktiskt produkt</li>
					</ul>

---


#### Man lär sig av sina misstag</h4>
					<ul>
						<li>Vi vill göra misstagen tidigt i processen så att de inte finns med när vi lanserar produkten.</li>
						<li>Allteftersom vi indentifierar våra misstag kan vi förfina och förbättra produkten.</li>
						<li>Upptäcker vi felen tidigt lägger vi inte onödig tid på att utveckla felaktiga och fel saker.</li>
					</ul>

---


#### Vi kommer gå närmre in på samtliga steg under kursens gång.</h4>

---


#### Terminologi</h4>
						<li><b>UX</b> = User eXperience - Användarupplevelse</li>
						<li><b>UI</b> = User Interface - Gränssnitt</li>
						<li><b>HCI</b> = Human Computer Interaction</li>
						<li><b>Design</b> = En process, inte endast det visuella</li>
						<li><b>Interface</b> - Gränssnitt = Något där två system, ämnen, organisationer etc, möts och interagerar.</li>
						<li><b>Interactive system</b> = A system which can be interacted with.</li>

---

