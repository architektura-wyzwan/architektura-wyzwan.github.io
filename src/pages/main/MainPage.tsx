import {Stack} from "@mui/material";
import * as React from "react";
import MainPagePoster from "./MainPagePoster";
import MainPageDescription from "./MainPageDescription";
import SpeakersSection from "./SpeakersSection";
import ImportantDatesSection from "./ImportantDatesSection";
import CurrentNewsSection from "./CurrentNewsSection";
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
			<MainPagePoster/>
			<MainPageDescription/>
			<ExperimentGuard experiment={speakers_experiment} enabled={<SpeakersSection/>}/>
			<ImportantDatesSection/>
			<CurrentNewsSection/>
		</Stack>);
}

export default MainPage;
