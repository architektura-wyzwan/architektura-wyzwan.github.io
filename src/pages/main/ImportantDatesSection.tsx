import * as React from "react";
import {Box, Typography} from "@mui/material";
import {Translation} from "../../components/Translation";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {important_dates, ImportantDate} from "../../data/ImportantDates";
import MainPageSection from "./MainPageSection";

function ImportantDatesSection() {
    const dateComponent = (date: ImportantDate) => (
        <Typography variant={date.important ? "bold" : "regular"}>
            <Translation pl={date.date_pl} en={date.date_en}/>
        </Typography>
    );

    return <MainPageSection title_pl="WAŻNE DATY" title_en="IMPORTANT DATES">
        <Timeline>
            {important_dates.map((date, id) => (
                <TimelineItem>
                    <TimelineOppositeContent sx={{
                        display: {
                            xs: 'none',
                            sm: 'initial'
                        },
                    }}>
                        {dateComponent(date)}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary"/>
                        {id === important_dates.length - 1 ? null : <TimelineConnector color="primary"/>}
                    </TimelineSeparator>
                    <TimelineContent>
                        <Box sx={{
                            display: {
                                xs: 'initial',
                                sm: 'none'
                            },
                        }}>
                            {dateComponent(date)} <br/>
                        </Box>
                        <Typography variant={date.important ? "bolder" : "lighter"}>
                            <Translation pl={date.description_pl} en={date.description_en}/>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    </MainPageSection>;
}

export default ImportantDatesSection;
