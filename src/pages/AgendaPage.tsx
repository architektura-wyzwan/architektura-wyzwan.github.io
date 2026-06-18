import {Divider, Grid, Tab, Typography} from "@mui/material";
import {Translation} from "../components/Translation";
import {Agenda, agenda, AgendaBlock, AgendaItem} from "../data/Agenda";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import ArticleLayout from "../layout/ArticleLayout";
import {SyntheticEvent, useState} from "react";
import {useIsXs} from "../hooks/UseDimensionHooks";

// The block title consists of the hours and the blocks title side by side
function BlockTitle(props: { item: AgendaBlock }) {
    return (<>
        <Grid size={{
            xs: 3,
            sm: 2,
        }}>
            <Typography variant="bold">{props.item.time}</Typography>
        </Grid>
        <Grid size={{
            xs: 13,
            sm: 14,
        }}>
            <Translation variant="bold" pl={props.item.description_pl} en={props.item.description_en}/>
        </Grid>
    </>)
}

// Lecture entry is displayed differently depending on if the screen width is small (xs) or larger.
// In all cases, the space below hours is left empty (the first <Grid> element)
//
// On xs screens; the lecture title spans the rest of the gird's width. In the next row (keeping space under hours
// empty), the speaker name and their institution name are displayed.
//
// On larger screens, the lecture title, speaker name and the institution name are displayed in one row.
function LectureItem(props: { item: AgendaItem }) {
    const isXs = useIsXs();
    return <>
        <Grid size={{
            xs: 3,
            sm: 2,
        }}/>
        <Grid size={{
            xs: 13,
            sm: 6,
            lg: 7,
        }}>
            <Typography variant="bolder">
                {props.item.title !== undefined ? props.item.title :
                    <Translation pl={props.item.title_pl} en={props.item.title_en}/>}
            </Typography>
        </Grid>
        {isXs ? <Grid size={3}/> : <></>}
        <Grid size={{
            xs: 6,
            sm: 4,
            lg: 3,
        }}>
            <Typography variant="body1">
                {props.item.speaker !== undefined ? props.item.speaker :
                    <Translation pl={props.item.speaker_pl} en={props.item.speaker_en}/>}
            </Typography>
        </Grid>
        <Grid size={{
            xs: 7,
            sm: 4,
        }}>
            <Typography variant="body1">
                {props.item.institution !== undefined ?
                    props.item.institution :
                    <Translation pl={props.item.institution_pl} en={props.item.institution_en}/>
                }
            </Typography>
        </Grid>
    </>;
}

// This component defines the tab with an agenda for a specific day
// The agenda is defined as a grid with 16 columns.
//
// Each lecture block is displayed in several rows. The first row displays the block hours and the block title, see
// <BlockTitle> for details. In the following rows individual lectures are displayed (if present), see <LectureItem> for
// details. At last a divider spanning the whole row is displayed.
function DayAgendaTab(props: { agenda: Agenda }) {
    return <Grid container
                 spacing={2}
                 columns={16}
    >
        {props.agenda.items.map((item) => (
            <>
                <BlockTitle item={item}/>
                {item.items.map((item) => <LectureItem item={item}/>)}
                <Grid size={16}>
                    <Divider/>
                </Grid>
            </>
        ))}
    </Grid>;
}

// Component defining the Agenda page
// url: https://architectureofchallenges.pl/agenda
//
// The agenda is defined as a set of tabs (https://mui.com/material-ui/react-tabs/), one tab displays information about
// one day of the conference.
// The <TabList> element is a list of date. When a tab is clicked, it updates the `dayNumber` and a tab with agenda for
// a specific day is displayed.
// The agenda for a specific day is defined in <DayAgendaTab> component
//
// Notes:
// This component uses the useState hook, you can read more about it here: https://react.dev/learn/state-a-components-memory
export default function AgendaPage() {
    const [dayNumber, setDayNumber] = useState(0);
    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setDayNumber(newValue);
    };
    return (
        <ArticleLayout title_pl="Program" title_en="Agenda">
            <TabContext value={dayNumber}>
                <TabList onChange={handleChange} aria-label="agenda tabs">
                    {agenda.map((agenda, index) =>
                        <Tab value={index}
                             label={<Translation pl={agenda.date_pl} en={agenda.date_en}/>}
                        />)}
                </TabList>
                {agenda.map((agenda, index) => (
                    <TabPanel value={index}>
                        <DayAgendaTab agenda={agenda}/>
                    </TabPanel>))}
            </TabContext>
        </ArticleLayout>
    );
}
