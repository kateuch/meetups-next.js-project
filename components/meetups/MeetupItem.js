import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import  {useRouter }from 'next/router'


//description: The event is held in collaboration with React Vienna, React Finland (virtual host), and Dynatrace (physical host).



function MeetupItem(props) {
  const router = useRouter();

  function showDetails () {
    router.push('/' + props.id);

  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetails}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
