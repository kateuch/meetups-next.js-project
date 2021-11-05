import MeetupList from "../components/meetups/MeetupList";

const Img = require("../public/default.jpg");

const initialMeetupList = [
  {
    id: "m1",
    image: Img,
    title: "React Vienna",
    address: "Vienna, Austria",
    description: `We love React and we thought it would be a great idea to put together a place where people can talk, meet and share their knowledge to bring their skills to the next level. Let's get better at doing this, together! All our HackJam events are free and formatted as hands-on workshops, so don't hesitate: grab your computer and join us!`,
  },
  {
    id: "m2",
    image: Img,
    title: "React VIX",
    address: "Vila Velha, Brasil",
    description:
      "Oi!Se você é amante de tecnologia, desenvolve software, trabalha com design, empreende, inova ou está procurando alguma coisa interessante pra fazer no ES, vamos trocar uma ideia?",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: initialMeetupList,
    },
  };
}
