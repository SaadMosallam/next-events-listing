import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/dummy-data";
import { useRouter } from "next/router";

const EventPage = () => {
    const router = useRouter();
    const eventData = getEventById(router?.query?.eventId);

    if (!eventData) {
        return (<p>No Event Found</p>);

    }

    return (
        <>
            <EventSummary title={eventData.title} />
            <EventLogistics date={eventData.date} address={eventData.location} image={eventData.image} imageAlt={eventData.title} />
            <EventContent>
                {eventData.description}
            </EventContent>
        </>
    )
}

export default EventPage;