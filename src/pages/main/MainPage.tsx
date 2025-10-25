import {Stack} from "@mui/material";
import * as React from "react";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import SpeakersPage from "./SpeakersPage";
import ImportantDatesPage from "./ImportantDates";
import NewsPage from "./NewsPage";
import {ExperimentGuard, speakers_experiment} from "../../Experiments";

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
			<ExperimentGuard experiment={speakers_experiment} enabled={<SpeakersPage/>}/>
			<ImportantDatesPage/>
			<NewsPage/>
		</Stack>);
}

export default MainPage;
