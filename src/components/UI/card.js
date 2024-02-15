import './card.css';
//This is an example of props children
function Card(props){
    const classes = 'card '+props.className;
    return (
       <div className={classes}>
        {props.children}
       </div> 
    );
}
export default Card;