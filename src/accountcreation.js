<!DOCTYPE html>
<html>
import React from 'react';
<head>
	<title>The tut</title>
</head>

<body>

<p><strong>Text:</strong></p>
			<input type="text" name="text" size=80 id='intext' ></input>
			<input type='button' value='create account!' onclick='show()' ></button>

			<div>	Name:
				<span id='show1'>

				</span>

			</div>
			<div>Message:Account:
				<span id='show2'>

				</span>
				has been created.
			</div>
</body>
<script>

	function show(){
		var content=document.getElementById('intext').value;
		document.getElementById('show1').innerHTML=content;
		document.getElementById('show2').innerHTML=content;
	}
</script>
var SearchBox = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name: ""
        }
    }
</body>
</html>
