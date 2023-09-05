import EventItem from "./EventItem";
import classes from './eventList.module.css';

const EventList = ({ items }) => {
    return (
        <ul className={classes.list}>
            {
                items.map(event => <EventItem key={event.id} item={event} />)
            }
        </ul>
    )
};

export default EventList;