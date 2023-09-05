import Link from "next/link";
import classes from './eventItem.module.css';
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = ({ item }) => {
    const { title, image, location, id, date } = item;

    const formattedDate = new Date(date).toLocaleDateString('en-us', {
        day: 'numeric',
        year: 'numeric',
        month: 'long'
    });

    const formattedAddress = location.replace(',', '\n');

    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt={title} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2 className={classes.title}>{title}</h2>
                    <div className={classes.date}>
                        <DateIcon />
                        <time>{formattedDate}</time>
                    </div>
                    <div className={classes.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button link={`/events/${id}`}>
                        <span>
                            Explore Event
                            <span className={classes.icon}>
                                <ArrowRightIcon />
                            </span>
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    )
};

export default EventItem;