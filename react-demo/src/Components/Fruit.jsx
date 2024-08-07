export default function Fruit({ name, Price, Emoji, soldout }) {
  return (
    <>
      <li>
        {Emoji}
        {name} {Price} {soldout ? "soldOut" : ""}
      </li>
    </>
  );
}
