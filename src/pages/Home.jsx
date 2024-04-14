import DocumentTitle from '../components/DocumentTitle';
import css from './Home.module.css'
// const styles = {
//     container: {
//       backgroundImage: 'url("../img/girl.jpg")',
//     // minHeight: 'calc(100vh - 50px)',
//     // display: 'flex',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Your Contacts, Your World, Connected.</h1>
      </div>
    </>
  );
}