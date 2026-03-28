function Card(props){
    return(
        <div className="Super">
        <div className="parent">
            <div className="card">
                <h2>Welcome! {props.name}</h2>
                <p>Let's build some cool UI's</p>
                <button>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Card;