//import FirstComp from './Components/first';
//import Tick from './Components/demo'

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );
//-----------------------------------------------------
// function Welcome(props){
//   return <h1>Hello , I'm {props.fname} {props.lname}</h1>
// }
// function Tick(){
//   return(
//     <div>
//       <Welcome fname="Harry" lname="Potter"/>
//       <Welcome fname="Harry1" lname="Potter1"/>
//       <Welcome fname="Harry2" lname="Potter2"/>
//     </div>
//   )
// }
//---------------------------------------------------------

// function Avatar(props){
//     return (
//       <img className="Avatar"
//               src={props.author.avatarUrl}
//               alt={props.author.name}
//           />
//     )
//   }
//   function Comment(props){
//     return (
//       <div className="Comment">
//         <div className="UserInfo">
//           <Avatar user={props.author} />
//           <div className="UserInfo-name">
//             {props.author.name}
//           </div>
//           <div className="Comment-text">
//             {props.text}
//           </div>
//           <div className="Comment-date">
//             {formatData(props.date)}
//           </div>
//         </div>
//       </div>
//     );
//   }