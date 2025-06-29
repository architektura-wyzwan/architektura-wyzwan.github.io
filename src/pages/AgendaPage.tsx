import * as React from "react";
import {Divider, Grid, Tab, Typography, useMediaQuery, useTheme} from "@mui/material";
import {Translation} from "../common/Translation";
import {agenda} from "../data/Agenda";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import PageLayout from "../common/PageLayout";

export default function AgendaPage() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const theme = useTheme();
    const smallOrLarger = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <PageLayout title_pl="Program" title_en="Agenda" wide={false}>
            <TabContext value={value}>
                <TabList onChange={handleChange} aria-label="agenda tabs example">
                    {agenda.map((agenda, index) => (
                        <Tab
                            label={<Translation pl={agenda.date_pl} en={agenda.date_en}/>}
                            value={index}
                        />))}
                </TabList>
                {agenda.map((agenda, index) => (
                    <TabPanel
                        value={index}
                    >
                        <Grid container
                              spacing={2}
                              columns={16}
                        >
                            {agenda.items.map((item) => (
                                <>
                                    <Grid size={{
                                        xs: 3,
                                        sm: 2,
                                    }}>
                                        <Typography variant="bold">{item.time}</Typography>
                                    </Grid>
                                    <Grid size={{
                                        xs: 13,
                                        sm: 14,
                                    }}>
                                        <Typography variant="bold">
                                            <Translation pl={item.description_pl} en={item.description_en}/>
                                        </Typography>
                                    </Grid>
                                    {item.items.map((item) => (
                                        <>
                                            <Grid size={2}/>
                                            <Grid size={{
                                                xs: 14,
                                                sm: 7,
                                            }}>
                                                <Typography variant="bolder">
                                                    {item.title !== undefined ? item.title :
                                                        <Translation pl={item.title_pl} en={item.title_en}/>}
                                                </Typography>
                                            </Grid>
                                            {smallOrLarger ? <></> : <Grid size={2}/>}
                                            <Grid size={{
                                                xs: 7,
                                                sm: 3,
                                            }}>
                                                <Typography variant="body1">
                                                    {item.speaker !== undefined ? item.speaker :
                                                        <Translation pl={item.speaker_pl} en={item.speaker_en}/>}
                                                </Typography>
                                            </Grid>
                                            <Grid size={{
                                                xs: 7,
                                                sm: 4,
                                            }}>
                                                <Typography variant="body1">
                                                    <Translation pl={item.institution_pl} en={item.institution_en}/>
                                                </Typography>
                                            </Grid>
                                        </>
                                    ))}
                                    <Grid size={16}>
                                        <Divider/>
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </TabPanel>))}
            </TabContext>
        </PageLayout>
    );
}
