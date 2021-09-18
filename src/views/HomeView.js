import React from "react";
//, { useEffect }
// import { useDispatch } from "react-redux";
import InputForm from "../components/InputForm";
import Graph from "../components/Graph";
import CurrentDetails from "../components/CurrentDetails";
// import WeeklyTable from "../components/WeeklyTable";
// import { getWeather } from "../store/Reducer";
import "../styles/HomeView.css";

function HomeView() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getWeather())
  // }, [])
  
	return (
		<>
			<header>
				<InputForm />
			</header>
      <CurrentDetails />
      <Graph />
			{/* <WeeklyTable /> */}
		</>
	);
}
export default HomeView;
