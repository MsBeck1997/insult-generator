function fetchSomething () {

	let result = fetch('')
		.then(response => {
			return response.json()
		} )

		.then (printData => {
			document.getElementById('target').innerHTML = text
		} )
}


function printInsult () {
	document.getElementById('')

}

<!--
You're such a (adjective) (animal) (body part), you (adjective) (cuss) (rude term).
-->