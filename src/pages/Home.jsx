import DocumentTitle from '../components/DocumentTitle';
const styles = {
  container: {
    paddingTop: '460px',
    paddingRight: '80px',
    paddingLeft: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 80,
    textAlign: 'center',
  },
  span: {
    color: '#ffff00',
  },
};

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>Connect <br/><span style={styles.span}>globally,</span> <br />act locally.</h1>
      </div>
    </>
  );
}