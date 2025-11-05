import {List, ListItem, ListItemIcon} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export function StandardList(props: { children: React.ReactNode[] }) {
    return <List dense={true}>
        {
            props.children.map((item, id) => (
                <ListItem key={"#" + id}>
                    <ListItemIcon><CircleIcon sx={{scale: 0.3}} color="primary"/></ListItemIcon>
                    {item}
                </ListItem>
            ))
        }
    </List>
}