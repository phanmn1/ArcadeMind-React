import './Card.css'

//Children props is a reserved word that specifies the opening and closing 
//properties of your component. Basically what is inbetween the <></> of your 
//custom component


function Card(props) {
    //Components can't dervie the classname like basic HTML stuff. 
    //You need to manually define and pass into the component the className for that 
    //component
    const classes = 'card ' + props.className;
    return(<div className={classes}>{props.children}</div>)
}


export default Card;