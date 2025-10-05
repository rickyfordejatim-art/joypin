import Head from 'next/head'

export default function Resume() {
  return (
    <div style={{
      fontFamily: 'system-ui, sans-serif',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      lineHeight: '1.6'
    }}>
      <Head>
        <title>Ricky Putra F. - HR Professional</title>
        <meta name="description" content="HR Professional specializing in talent acquisition, HR compliance, and organizational psychology. Managed 800+ employees across FMCG, tech, and manufacturing sectors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50' }}>Ricky Putra F.</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#34495e', marginBottom: '1rem' }}>
          HR Professional & Relationship Officer
        </h2>
        <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '1.5rem' }}>
          <a href="mailto:Rickyputraf@gmail.com" style={{ color: '#0077b5', textDecoration: 'none' }}>Rickyputraf@gmail.com</a> • 
          <a href="https://linkedin.com/in/ricky-putra-febrianto/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', marginLeft: '0.5rem' }}>LinkedIn</a> • 
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', marginLeft: '0.5rem' }}>Download Resume</a>
        </p>
        <a 
          href="mailto:Rickyputraf@gmail.com?subject=HR Collaboration Inquiry"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            background: '#0077b5',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            transition: 'background 0.3s',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.background = '#005580'}
          onMouseOut={(e) => e.target.style.background = '#0077b5'}
        >
          💼 Mari Kolaborasi — Saya Siap Membantu Tim Anda
        </a>
      </header>

      <main>
        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>
            Key Impact
          </h3>
          <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
            <li>Managed 800+ employees across FMCG, tech, and manufacturing clients</li>
            <li>100% regulatory compliance — zero labor disputes or BPJS penalties</li>
            <li>Developed 30+ HR SOPs for recruitment, onboarding, and payroll</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>
            About
          </h3>
          <p style={{ fontSize: '1rem', color: '#34495e' }}>
            Lulusan Psikologi dari Universitas Airlangga dengan spesialisasi Psikologi Industri dan Organisasi. 
            Berpengalaman dalam <strong>talent acquisition</strong>, <strong>HR compliance</strong>, dan <strong>manajemen siklus karyawan</strong>. 
            Saat ini sebagai Relationship Officer di PT Shelter Indonesia.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>
            Experience
          </h3>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50' }}>Relationship Officer — PT Shelter Indonesia</h4>
            <p style={{ fontSize: '0.9rem', color: '#7f8c8d', marginBottom: '0.5rem' }}>Jan 2024 – Present</p>
            <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
              <li>Managed HR for PT Bayer Indonesia (80 employees), 100% compliant</li>
              <li>Reduced time-to-hire by 25% via standardized recruitment</li>
            </ul>
          </div>
        </section>

        <section>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '0.5rem' }}>
            Education
          </h3>
          <p style={{ fontSize: '1rem', color: '#34495e' }}>
            <strong>Sarjana Psikologi</strong> – Universitas Airlangga
          </p>
        </section>
      </main>

      <footer style={{ marginTop: '3rem', paddingTop: '1rem', borderTop: '1px solid #eee', textAlign: 'center', fontSize: '0.9rem', color: '#7f8c8d' }}>
        <p>&copy; {new Date().getFullYear()} Ricky Putra F. All rights reserved.</p>
      </footer>
    </div>
  )
}
