<!doctype html>
<html>
	<head>
		<title>7.UX - Test & Evaluation</title>
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

					<h3>7. UX</h3>
					<h5>Testa och utvärdera</h5>

---


#### Fungerar min design som förväntat?</h4>

---


#### Process - testa</h4>
					<img src="../../media/ux-images/ux-7/iterativ-test.png" alt="Process testing">

---


#### När bör man testa?</h4>
					<ul>
						<li>Optimalt i varje steg i processen, varje iteration</li>
						<ul>
							<li>Tidiga koncept - skisser</li>
							<li>Första prototyperna - “skeletten”</li>
							<li>Sena prototyper</li>
							<li>Den “färdiga” produkten</li>
							<li>Utifrån resultat från dessa tester kan vi ta bättre beslut för nästa iteration.</li>
						</ul>
					</ul>

---


#### Viktiga frågor innan man börjar testa?</h4>
					<ul>
						<li>Är representationen passande för att kunna testas?</li>
						<li>Vem testar?</li>
						<li>Varför och vad testar vi?</li>
						<li>Hur testar vi, ställer vi rätt frågor till passande personer?</li>
						<li>Representerar de vår målgrupp?</li>
					</ul>

---


#### Subjektivt och Objektivt</h4>
					<ul>
						<li>Det ”objektiva” är mätbart, kvantifierbart och observerbart, det ”subjektiva” undflyende och flyktigt.</li>
						<ul>
							<li>Stenar är bergarter och mineraler (Objektivt sett).</li>
							<li>Det skaver och gör ont i skon är en ”subjektiv upplevelse”.</li>
						</ul>
						<li>Att en text är subjektiv innebär att den innehåller ett personligt ställningstagande.</li>
						<li>Det som är sant för dig behöver inte vara sanning för mig!</li>
					</ul>

---


#### Vad är användartester?</h4>
					<ul>
						<li>Det innebär att vi involverar tilltänkta användare i designprocessen.</li>
						<li>Låter användaren testa våra koncept/prototyper/produkter.</li>
						<li>Ger användaren chansen att tycka till, detta i sin tur kan påverka våra designbeslut.</li>
					</ul>

---


#### Varför är det viktigt med användartester?</h4>
					<ul>
						<li>När allt kommer omkring så är det oftast till slut en användare som skall nyttja våra produkter/tjänster.</li>
						<li>Förstår/uppskattar/godkänner användaren inte produkten är risken stor att de inte köper/använder/promotar vår produkt.</li>
					</ul>

---


#### Kvalitativa och kvalitativa undersökningar</h4>
					<h5>Definition av kvantitativ undersökning</h5>
					<p>"Kvantitativa data är utformade för att samla in kalla fakta. Siffror. Kvantitativa data är strukturerade och statistiska. De hjälper dig att dra allmängiltiga slutsatser av materialet."</p>
					<p style="font-size: 20px; text-align: right;"><a href="https://sv.surveymonkey.com/mp/quantitative-vs-qualitative-research/">- Survey monkey</a></p>

---


#### Kvalitativa och kvalitativa undersökningar</h4>
					<h5>Definition av kvalitativ undersökning</h5>
					<p>"Kvalitativa data samlar in information som beskriver ett ämne snarare än mäter det. Det kan vara intryck, åsikter och synpunkter. En kvalitativ enkät är inte så strukturerad: målet är att göra en djupdykning i ämnet för att samla information om människors motivation, tankesätt och attityder. Detta ger en djupare förståelse av frågorna, men det gör också att resultaten blir svårare att analysera."</p>
					<p style="font-size: 20px; text-align: right;"><a href="https://sv.surveymonkey.com/mp/quantitative-vs-qualitative-research/">- Survey monkey</a></p>

---


#### Öppna och slutna frågor</h4>
					<ul>
						<li>Vad tyckte du om inloggnings-skärmen i vår applikation? (öppen fråga där användare svarar med sina egna ord)
						<li>(Kvantitativ) Jämfört med våra konkurrenter, tycker du att vår inloggningsskärm är:
						<ul>
							<li>Snyggare</li>
							<li>Ungefär samma</li>
							<li>Fulare</li>
						</ul>
					</ul>

---


#### Exempel på kvalitativa metoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Intervjuer.</b> Personliga konversationer som gör en djupdykning i ett visst ämne.</li>
						<li><b>Fallstudier.</b> Samlingar av kundberättelser från djupgående intervjuer.</li>
						<li><b>Expertråd.</b> Högkvalitativ information från välinformerade källor.</li>
						<li><b>Fokusgrupper.</b> Konversationer på plats eller online med små grupper för att höra vad de tycker om en produkt eller ett ämne.</li>
						<li><b>Öppna enkätfrågor.</b> En textruta i en enkät där den svarande kan ge sina synpunkter på ämnet i sina egna ord.</li>
						<li><b>Observationsstudier.</b> Observera människor i deras dagliga liv för att till exempel förstå hur de använder en viss produkt.</li>
					</ul>

---


#### När skall vi använda de olika?</h4>
					<ul>
						<li>Det beror på vad du vill veta.</li>
						<li>Ofta kombinerar man kvalitativ och kvalitativ insamling.</li>
					</ul>

---


#### Vad kan vi testa?</h4>
					<ul>
						<li>Användbarhet (Usability).</li>
						<li>Jämföra olika lösningar.</li>
						<li>Studera beteénden.</li>
						<li>Vad användaren tycker om.</li>
					</ul>

---



#### Användbarhet - Usability</h4>
					<ul>
						<li><b>Lärbarhet</b> - Hur enkelt är det att utföra uppgifter första gången användaren möter designen?</li>
						<li><b>Effektivitet</b> - Hur snabbt kan användaren utföra uppgifter i designen efter att de har lärt sig den?</li>
						<li><b>Att minnas</b> - Hur enkelt kan användare bli skickliga på att använda designen efter att de har varit ifrån den ett tag.</li>
						<li><b>Fel</b> - Hur många fel gör användaren, hur allvarliga och kan dem återhämta sig efter dessa?</li>
						<li><b>Nöjdhet</b> - Hur trevligt är det att använda designen?</li>
					</ul>

---


#### Testmiljöer</h4>
					<ul>
						<li>Kontrollerade miljöer - Labbmiljöer</li>
						<li>Live - Samla data från en applikation eller liknande när användaren använder applikationen ute i verkliga livet.</li>
						<li>Guidad eller icke guidad testning.</li>
					</ul>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Usability-Lab Studies:</b> participants are brought into a lab, one-on-one with a researcher, and given a set of scenarios that lead to tasks and usage of specific interest within a product or service.</li>
						<li><b>Ethnographic Field Studies:</b> researchers meet with and study participants in their natural environment, where they would most likely encounter the product or service in question.</li>
						<li><b>Participatory Design:</b> participants are given design elements or creative materials in order to construct their ideal experience in a concrete way that expresses what matters to them most and why.</li>
						<li><b>Focus Groups:</b> groups of 3–12 participants are lead through a discussion about a set of topics, giving verbal and written feedback through discussion and exercises.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Interviews:</b> a researcher meets with participants one-on-one to discuss in depth what the participant thinks about the topic in question.</li>
						<li><b>Eyetracking:</b> an eyetracking device is configured to precisely measure where participants look as they perform tasks or interact naturally with websites, applications, physical products, or environments.</li>
						<li><b>Usability Benchmarking:</b> tightly scripted usability studies are performed with several participants, using precise and predetermined measures of performance.</li>
						<li><b>Moderated Remote Usability Studies:</b> usability studies conducted remotely with the use of tools such as screen-sharing software and remote control capabilities.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Unmoderated Remote Panel Studies:</b> a panel of trained participants who have video recording and data collection software installed on their own personal devices uses a website or product while thinking aloud, having their experience recorded for immediate playback and analysis by the researcher or company.</li>
						<li><b>Concept Testing:</b> a researcher shares an approximation of a product or service that captures the key essence (the value proposition) of a new concept or product in order to determine if it meets the needs of the target audience; it can be done one-on-one or with larger numbers of participants, and either in person or online.</li>
						<li><b>Diary/Camera Studies:</b> participants are given a mechanism (diary or camera) to record and describe aspects of their lives that are relevant to a product or service, or simply core to the target audience; diary studies are typically longitudinal and can only be done for data that is easily recorded by participants.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Customer Feedback:</b> open-ended and/or close-ended information provided by a self-selected sample of users, often through a feedback link, button, form, or email.</li>
						<li><b>Desirability Studies:</b> participants are offered different visual-design alternatives and are expected to associate each alternative with a set of  attributes selected from a closed list; these studies can be both qualitative and quantitative.</li>
						<li><b>Card Sorting:</b> a quantitative or qualitative method that asks users to organize items into groups and assign categories to each group. This method helps create or refine the information architecture of a site by exposing users’ mental models.</li>
						<li><b>Clickstream Analysis:</b> analyzing the record of screens or pages that users clicks on and sees, as they use a site or software product; it requires the site to be instrumented properly or the application to have telemetry data collection enabled.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>A/B Testing (also known as “multivariate testing,” “live testing,” or “bucket testing”):</b> a method of scientifically testing different designs on a site by randomly assigning groups of users to interact with each of the different designs and measuring the effect of these assignments on user behavior.</li>
						<li><b>Unmoderated UX Studies:</b> a quantitative or qualitative and automated method that uses a specialized research tool to captures participant behaviors (through software installed on participant computers/browsers) and attitudes (through embedded survey questions), usually by giving participants goals or scenarios to accomplish with a site or prototype.</li>
						<li><b>True-Intent Studies:</b> a method that asks random site visitors what their goal or intention is upon entering the site, measures their subsequent behavior, and asks whether they were successful in achieving their goal upon exiting the site.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Olika testmetoder</h4>
					<ul style="font-size: 30px;">
						<li><b>Intercept Surveys:</b> a survey that is triggered during the use of a site or application.</li>
						<li><b>Email Surveys:</b> a survey in which participants are recruited from an email message.</li>
					</ul>
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Christian Rohrer (NN-group)</a></p>

---


#### Process - Utvärdera</h4>
					<img src="../../media/ux-images/ux-7/iterativ-eval.png" alt="Process evaluation">

---


#### Utvärdera och analysera resultat</h4>
					<ul>
						<li>Innan du börjar analysera din resultat, granska vad dina mål med testningen var, vad var det du ville testa och få svar på?</li>
						<li>Organisera din insamlade data (inspelningar, enkätsvar, anteckningar)</li>
						<li>Var noga med hur du observerar och för anteckningar under testerna:</li>
						<ul>
							<li>Användaren klickade på fel knapp (dåligt exempel)</li>
							<li>Användaren klickade på “rabatter” istället för “betalningsinfo” (bra exempel)</li>
						</ul>
					</ul>

---


#### Analysera resultat</h4>
					<ul>
						<li>Varför fick vi resultaten vi fick?</li>
						<li>Finns det någon aspekt som gör att vi inte kan dra slutsatser från testerna? (var det representativa användare, var det tillräckligt många osv.).</li>
						<li>Prioritera åtgärder och förändringar.</li>
					</ul>

---


#### Antal testanvändare - Användbarhetstesting(usability)</h4>
					<img src="../../media/ux-images/ux-7/nr-of-users.png" alt="Number of users, usability testing">
					<p style="font-size: 20px; text-align: right;"><a href="https://www.nngroup.com/articles/which-ux-research-methods/">Nielsen (NN-group)</a></p>

---

