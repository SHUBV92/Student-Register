export default function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: '#F0F0F0',
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
