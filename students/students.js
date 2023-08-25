
studnew = [
	['bilet3.jpg','Всероссийский форум СПО пройдет с 17 по 18 августа в ВЦ «Гостиный двор»','В рамках Московского урбанистического форума, в нем примут участие около 2000 человек.',`В течение двух дней Всероссийского форума СПО пройдут панельные дискуссии, круглые столы и лекции с участием ведущих экспертов. Руководитель проекта «Билет в будущее» Иван Есин проведет панельную дискуссию на тему «Профессиональное самоопределение: инструменты и практики». 19 августа гости форума посетят образовательные экскурсии в колледжи Москвы.`,'26 июля, 2023г.'],

	['arch.png','День археолога','Об этой увлекательной профессии читайте в интервью с директором национального музея РСО-Алания.',`А знаете ли вы, что сегодня - день археолога? Традиция отмечать 15 августа День археолога сложилась в России в 1930‑х годах по инициативе профессора Владислава Равдоникаса, который с 1934 по 1959 год руководил экспедицией на раскопках поселения Старая Ладога в окрестностях Ленинграда (Санкт‑Петербурга). Но есть археологи и в Осетии. Один из них - Аслан Цуциев сегодня возглавляет Национальный музей РСО-А. Вот, что он говорит: <br><br> "О важности раннего выбора профессии могу рассказать на собственном примере. Когда-то я прочитал книжку, называлась она "Греческое сокровище" - книга о том, как Генрих Шлиман "Трою" раскапывал. Вот это, собственно говоря, потом и определило мой выбор. Считаю, что молодёжи надо обязательно давать возможность познакомиться с разными профессиями. Школьники даже, наверное, не совсем понимают, что им приходится делать такой важный выбор в жизни. Но когда работа любимая, ты получаешь от этого удовольствие, тогда, мне кажется, намного интереснее жизнь. А когда ты мучаешься от нелюбимой работы, то это нехорошо. Поэтому то, что сегодня есть такие проекты, как "Билет в будущее", на самом деле важно, чтобы молодёжь могла попробовать окунуться в разные сферы, почувствовать какой-то интерес к той или иной профессии, ощутить, какая именно специальность ближе. И потом уже более осознанно делать выбор так, чтобы стать настоящим профессионалом".<br><br> -"Наверное, у вас за плечами не одна интересная экспедиция?" <br><br>
		- Много лет мы проработали вот в Даргавсе, в "городе мёртвых", не в самом некрополе, а напротив. Там очень большой, очень интересный памятник аланского времени - около 40 гектаров. Там находятся самые ранние погребения где-то 7 века и самые поздние 12-го, то есть это кладбище функционировало на протяжении почти около 600 лет. Там фактически нет грабленых погребений, катакомб. Там очень много таких уникальных находок у нас было: и седло аланское там замечательное 9 века, и оружие, и стеклянная посуда, и украшения - многое выставлено у нас сейчас постоянной экспозиции Национального музея.
		<br><br>
		Многие вещи демонстрировались за пределами республики, большая выставка в Санкт-Петербурге, в Эрмитаже. 4 зала - "Сокровища Аланского царства". Все крупнейшие музеи наши там выставлялись, у кого есть аланские материалы, в том числе наш. И наши раскопки там были представлены.
		<br><br>
		- Насколько активно сегодня в раскопках бывает задействована молодёжь?
		<br><br>
		- Сегодня каких-то масштабных раскопок на территории республики нет. Но есть такие, которые называют новостроечными работами, спасательными, к примеру, в местах, где дорогу прокладывают. Вот сейчас, скажем, в объезд Владикавказа строят дорогу. Вот там археологи поработали. Поэтому экспедиции, конечно, работают в республике и не только наши. Буквально сегодня приехала из Москвы экспедиция. К сожалению, в прошлом году не стало нашего коллеги Александра Мошинского, под руководством которого в республике 40 лет работал Государственный исторический музей , но экспедиция в этом году на разведку в Горную Дигорию к нам приехала. Еще одна собирается в течение месяца. Так что работы много интересной и материалов очень интересных тоже. Студенты истфака каждый год проходят археологическую практику. Сейчас она может не такая масштабная, как раньше, но от этого не менее увлекательная.`,'15 августа, 2023г.'],

																										
																										]


if (document.body.contains(document.getElementsByClassName('school_flex_cards')[0])) {

for(let i = studnew.length-1; i>=0; i--){
	document.getElementById('card_insert').insertAdjacentHTML("beforebegin",`
		<div class="school_card">
					<div class="card_image">
						<img src="images/${studnew[i][0]}" alt="" class="inftake">
					</div>
					<div class="card_disc">
						<h2 class="inftake">
							${studnew[i][1]}
						</h2>
						<div style="text-align:right;font-size:.9rem">
							${studnew[i][4]}
						</div>
						<p class="inftake">
							${studnew[i][2]}
						</p>



						<div class="link_card">
							<a href="news/ticket_new_school.html" class="scholinks">
								Посмотреть
							</a>
						</div>
					</div>
				</div>`)
}



let newinfo = document.getElementsByClassName('scholinks')

for(let i= studnew.length-1; i>=0;i--){
	newinfo[i].onclick = function() {
		localStorage.setItem('infonew',`${studnew.length-i-1}`)
	}
}
}



if (document.body.contains(document.getElementsByClassName('the_new_container')[0])) {
	let localca = localStorage.getItem('infonew')
	document.getElementsByClassName('the_new_container')[0].innerHTML = `
			<h1>
				${studnew[localca][1]}
			</h1>

			<!--<div class="n_date_2">
				${studnew[localca][4]}
			</div>-->

			<div class="n_main_image" name="changedata">
				<img src="../images/${studnew[localca][0]}">
			</div>
			
			
			<div class="n_main_text">
				<div>
					<!-- <h4>Сроки приема на заочное и вечернее сократились</h4>-->
					<p>
						${studnew[localca][3]}
					</p>
				</div>
			</div>

	`
// if (document.getElementsByClassName('n_date_2')[0].innerText == `Об этой увлекательной профессии читайте в интервью с директором национального музея РСО-Алания.`) {
// 	document.getElementsByClassName('n_date_2')[0].style.display = 'none';
// }
}

