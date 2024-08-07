import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ["Apple", "Banana", "Orange", "Pinapple", "Mango"];
  const fruits = [
    { name: "Apple", Price: 10, Emoji: "🍎", soldout: true },
    { name: "Banana", Price: 7, Emoji: "🍌", soldout: true },
    { name: "Orange", Price: 2, Emoji: "🍊", soldout: false },
    { name: "Mango", Price: 6, Emoji: "🥭", soldout: true },
    { name: "Pineapple", Price: 1, Emoji: "🍍", soldout: false },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            Price={fruit.Price}
            Emoji={fruit.Emoji}
            soldout={fruit.soldout}
          ></Fruit>
        ))}
      </ul>
    </div>
  );
}
