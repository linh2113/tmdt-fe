// file: src/app/cart/page.tsx  (Next.js 13 với App Router)
export default function CartPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tin đăng đã lưu (1 / 100)</h2>

      <div style={styles.card}>
        <img
          src="/banner1.png" 
          alt="Kia Carnival"
          style={styles.image}
        />
        {/* Thông tin tin đăng */}
        <div style={styles.info}>
          <h3 style={styles.itemTitle}>
            BIG SALE - Kia Carnival 2.2D Signature 2022 Odo 4w
          </h3>
          <p style={styles.price}>1.426.000.000 ₫</p>
          <span style={styles.savedTag}>Tin đã lưu</span>
        </div>

        <button style={styles.chatButton}>Chat</button>
        <span style={styles.heartIcon}>♥</span>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '0 16px',
  },
  title: {
    fontSize: '18px',
    margin: '16px 0',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginTop: '8px',
  },
  image: {
    width: '120px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '16px',
    borderRadius: '4px',
    backgroundColor: '#f0f0f0',
  },
  info: {
    flex: 1, // cho phép khu vực này chiếm không gian còn lại
  },
  itemTitle: {
    fontSize: '16px',
    margin: '0 0 8px 0',
    fontWeight: 600,
  },
  price: {
    margin: '0 0 8px 0',
    color: '#d00',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  savedTag: {
    fontStyle: 'italic',
    color: '#666',
  },
  chatButton: {
    backgroundColor: '#00b0ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    cursor: 'pointer',
    marginRight: '8px',
  },
  heartIcon: {
    color: 'red',
    fontSize: '20px',
    cursor: 'pointer',
  },
} as const;
