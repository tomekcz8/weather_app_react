export default function Main() {
	return (
		<main>
			<div className='main_info'>
				<div className='main_data'>
					<h1>Good morning</h1>
					<p className='hours'>12:00</p>
					<p className='days'>Środa 7 marca</p>
				</div>
				<p>Częściowe zachmurzenie i opady</p>
			</div>

			<div className='weather_box'>
				<div className="input_container">
					<img className='search_icon' src='../public/search.png' alt='search icon' />
					<input className='weather_city_input' type='text' placeholder='City name' />
				</div>
				<img className='weather_icon' src='../public/cloudy.png' alt='weather icon' />
			</div>
		</main>
	)
}
