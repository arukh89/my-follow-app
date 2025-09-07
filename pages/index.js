export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: '#FF6B6B',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '40px',
          fontWeight: 'bold'
        }}>
          Y
        </div>
        
        <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>Yokozoeth</h1>
        <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '20px' }}>@yokozoeth</p>
        
        <div style={{ fontSize: '14px', marginBottom: '30px' }}>
          🚀 Building amazing things on the web<br/>
          💡 Sharing insights about tech and innovation<br/>
          🌟 Join the community!
        </div>
        
        <a 
          href="https://x.com/yokozoeth?t=c6QKwS7QZvHzxnvbBlGpJw&s=09"
          target="_blank"
          style={{
            background: '#1DA1F2',
            color: 'white',
            padding: '15px 30px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            display: 'inline-block'
          }}
        >
          Follow on 𝕏
        </a>
        
        <div style={{ marginTop: '20px', fontSize: '12px', opacity: 0.8 }}>
          ⚡ Mini App
        </div>
      </div>
    </div>
  );
            }
