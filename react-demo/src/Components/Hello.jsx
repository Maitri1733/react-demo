// const name = "Robby";

// function DisplayMessage() {
//   return <h1>Welcome...</h1>;
// }

function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name} {person.seatNumbers}
      </h1>
      {/* <h1>Hello there is components!</h1>
      <h1>{DisplayMessage()}</h1>
      <h1>{10 + 20}</h1>
      <h1>Wow!{name}</h1> */}
    </div>
  );
}
export default Hello;
