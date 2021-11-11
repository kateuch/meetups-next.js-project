import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";


export default function MeetupDetails(props) {

  return (
    <MeetupDetail
    image = {props.meetupId.image}
    title = {props.meetupId.title}
    description = {props.meetupId.description}
    adress = {props.meetupId.adress}
    />

  )
}
export async function getStaticPaths() {

    const client = await MongoClient.connect("mongodb+srv://kateuch:femOFMMt9H4pJSf8@cluster0.7j1hg.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const meetups = await  meetupsCollections.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupId: meetup.id.toString()
        }
    })),
}
}


export async function getStaticProps (context) {
    const client = await MongoClient.connect("mongodb+srv://kateuch:femOFMMt9H4pJSf8@cluster0.7j1hg.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetupId = context.params.meetupId;

  const selectedMeetups= await  meetupsCollections.findOne({_id: ObjectId(meetupId)});

  client.close();



  return {
      props: {
          meetupId: {
           id: selectedMeetups._id.toString(),
           title: selectedMeetups.title,
           image: selectedMeetups.image,
           adress: selectedMeetups.adress,
           description: selectedMeetups.description
          }
      }
  }
}
