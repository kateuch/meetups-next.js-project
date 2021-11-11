import classes from './MeetupDetail.module.css';

export default function MeetupDetail (props) {
    return (
    <section className={classes.detail}>
        <img src={props.image}/>
        <h2>{props.title}</h2>
        <h1>{props.description}</h1>
        <br/>
        <br/>
        <h1>{props.adress}</h1>
    </ section>
    )
}