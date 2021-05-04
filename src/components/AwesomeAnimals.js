// src/components/LikeButton.js

export default function AwesomeAnimals() {
  //   const [increase, arrvalue] = useState([
  //     "Chicken",
  //     "Sloth",
  //     "Porcupine",
  //     "Killer whale",
  //     "Velociraptor",
  //   ]);
  return (
    <div>
      <ul>
        {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
          (animal, index) => {
            return (
              <li key={index}>
                Awesomeness level {index + 1}: {animal}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
