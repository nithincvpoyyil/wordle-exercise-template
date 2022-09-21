export default function Wordle(props: {
  wordle: { char: string; isCorrect: boolean }[];
}) {
  const elements = props.wordle.map((item, i) => {
    return (
      <span
        key={item.char + i}
        className={item.isCorrect ? 'correct' : 'wrong'}
      >
        {item.char}
      </span>
    );
  });
  return <div>{elements}</div>;
}
