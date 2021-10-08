export default function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: 'grey',
        padding: '10px',
        margin: '10px',
        color: 'white',
        borderRadius: '20px',
      }}
    >
      {children}
    </div>
  );
}
