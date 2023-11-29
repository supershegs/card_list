import React  from "react";
// import logo from './logo.svg';

// const Card= (props) => {
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
//             <img alt='alvatar' src={`https://robohash.org/${props.id}?set=set1`} />
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

// or


// const Card= (props) => {
//     const {name, email, id}= props;
//     return (
//         <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
//             <img alt='alvatar' src={`https://robohash.org/${id}?set=set1`} />
//             <div>
//                 <h2>{name}</h2>
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }

//or

const Card= ({name, email, id}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-5">
            <img alt='alvatar' src={`https://robohash.org/${id}?set=set1`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;