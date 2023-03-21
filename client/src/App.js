import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder
import About from "./pages/About";
import Home from "./pages/Home";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs";
import Slide from "./components/slide";
import Login from "./components/login";
import "./assets/css/content.css";

class App extends Component {
	MenuItemTexts = ["STORIES", "INTERVIEW TIPS", "GRADUATE RESOURCES"];
	render() {
		return (
			<div>
				<div className="maincontainer">
					<CustomHeader MenuItemTexts={this.MenuItemTexts}></CustomHeader>
				</div>
				<div>
					<hr />
					<div className="content"></div>
					<Slide />
					<Login />
					<hr />
				</div>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/admin" element={<AdminJobs />} />
						<Route path="/grad" element={<GradJobs />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
