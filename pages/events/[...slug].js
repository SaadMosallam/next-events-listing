import EventList from "@/components/events/EventList";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventPage = () => {
    const router = useRouter();
    const { slug: filterData } = router.query;


    if (!filterData) {
        return <p className="center">Loading</p>
    }

    const [filteredYear, filteredMonth] = filterData;

    const numYear = +filteredYear;
    const numMonth = +filteredMonth;
    console.log(numMonth)

    if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12 || numYear < 2021 || numYear > 2030) {
        return <p className="center">Invalid filter, please adjust your values</p>
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return <p className="center">No Events Found</p>
    }

    return (
        <div>
            <EventList items={filteredEvents} />
        </div>
    )
}

export default EventPage;