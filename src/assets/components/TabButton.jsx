export default function TabButton({ title, onSelect, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {title}
      </button>
    </li>
  );
}
