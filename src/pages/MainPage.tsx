import {Stack} from "@mui/material";
import * as React from "react";
import FirstPage from "./main/FirstPage";
import SecondPage from "./main/SecondPage";
import SpeakersPage from "./main/SpeakersPage";
import ImportantDatesPage from "./main/ImportantDates";
import NewsPage from "./main/NewsPage";
import {ExperimentGuard, speakers_experiment} from "../Experiments";

function MainPage() {
	return (
		<Stack
			direction="column"
			spacing={{
				xs: 5,
				sm: 10,
				md: 5,
			}}
			sx={{
				pb: 10
			}}
		>
			<FirstPage/>
			<SecondPage/>
			<ExperimentGuard experiment={speakers_experiment}><SpeakersPage/></ExperimentGuard>
			<ImportantDatesPage/>
			<NewsPage/>
		</Stack>);
}

export default MainPage;
