import * as React from "react";
import {Divider, List, ListItem, ListItemText, Tab} from "@mui/material";
import {Translation} from "../common/Translation";
import {agenda} from "../data/Agenda";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import PageLayout from "../common/PageLayout";

export default function AgendaPage() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
                        <List>
                            {agenda.items.map((item, id) => (
                                <>
                                <ListItem>
                                    <ListItemText
                                        id={index + "_" + id}
                                        primary={item.time}
                                        secondary={<Translation pl={item.description_pl} en={item.description_en}/>}
                                    />
                                </ListItem>
                                <Divider component="li" />
                                </>
                            ))}
                        </List>
                    </TabPanel>))}
            </TabContext>
        </PageLayout>
    );
}
