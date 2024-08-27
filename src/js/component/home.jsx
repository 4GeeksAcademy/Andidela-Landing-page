import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://picsum.photos/500/325?random=1"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonUrl="https://en.wikipedia.org/wiki/Bob_Dylan"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://picsum.photos/500/325?random=2"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonUrl="https://en.wikipedia.org/wiki/Bob_Marley"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://picsum.photos/500/325?random=3"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonUrl="https://en.wikipedia.org/wiki/Marilyn_Monroe"
							buttonLabel="Find out more!"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://picsum.photos/500/325?random=4"
							cardTitle="Card Title"
							cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
							buttonUrl="https://en.wikipedia.org/wiki/Michael_Jackson"
							buttonLabel="Find out more!"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Copyright @ Your Website - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;