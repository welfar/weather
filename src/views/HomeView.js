import React from "react";
import { useSelector } from "react-redux";
import InputForm from "../components/InputForm";
import Graph from "../components/Graph";
import CurrentDetails from "../components/CurrentDetails";
import WeeklyTable from "../components/WeeklyTable";
import "../styles/HomeView.css";

function HomeView() {
  const { weather } = useSelector((state) => {
		return {
			weather: state.reducer.weather,
		};
	});
  
	return (
		<>
			<header>
				<InputForm />
			</header>
      <CurrentDetails />
      <Graph />
      <div className="summary">{weather?.daily?.summary}</div>
      <WeeklyTable/>
		</>
	);
}
export default HomeView;
