export default function TabButton ({value, className, setSelectedTab}) {
  return (
    <button
      className={ className }
      onClick={() => setSelectedTab()}
    >{value}</button>
  );
}