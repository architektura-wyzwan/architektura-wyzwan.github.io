import * as React from "react";
import {Grid} from "@mui/material";
import {Translation} from "../components/Translation";
import {StandardRectangleCard} from "../components/StandardCard";
import {articles} from "../data/Articles";
import StandardGrid from "../components/StandardGrid";
import PageLayout from "../layout/PageLayout";
import urls from "../Urls";

function AllNewsPage() {
	return (
		<PageLayout title_pl="Aktualności" title_en="News" wide={true}>
			<StandardGrid>
				{articles.map((news, index) => (
					<Grid size={1}>
						<StandardRectangleCard
							url={urls.article(index)}
							image={news.image}
							cardTitle={<Translation pl={news.title_pl} en={news.title_en}/>}
							cardDescription={<Translation pl={news.subtitle_pl} en={news.subtitle_en}/>}
						/>
					</Grid>
				))}
			</StandardGrid>
		</PageLayout>
	);
}

export default AllNewsPage;
