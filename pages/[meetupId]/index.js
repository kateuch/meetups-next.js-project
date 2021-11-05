import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails(props) {

  return (
    <MeetupDetail id= {props.meetupId.id}
    image = {props.meetupId.image}
    title = {props.meetupId.title}
    description = {props.meetupId.description}
    adress = {props.meetupId.adress}
    />

  )
}
export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {params: {
                meetupId: 'm1'
            }}
        ]
    }
}

export async function getStaticProps (context) {
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupId: {
                id: meetupId,
                image:'img',
                title:'tiiel',
                description:'description',
                adress:'adress'
            }
        }
    }
}
