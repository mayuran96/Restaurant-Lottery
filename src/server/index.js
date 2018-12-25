let express = require('express'),
path = require('path'),
bodyParser = require('body-parser')



const setupServer = () => {
	const port = 8080;
	let app = express();

	//__dirname is the current directory in which the script is executing so /src/server
	// the views directory is where templated pages can go and you can use the render function
	// to get the views
	app.set("views", __dirname);
	//specifies where you are able to serve static assets
	app.use(express.static(path.join(__dirname, "../../public")))
	app.use(bodyParser.urlencoded({ extended : true }))
	app.use(bodyParser.json())


	app.get("*", (req, res) =>{
		res.sendFile('index.html', { root: path.join(__dirname, '../../public') })
	});

  // Run the server itself
  let server = app.listen(port, () => {
    console.log('Listening on port 8080');
  });
}

setupServer();