import BreadCrumbs from '../../components/BreadCrumb';

const Home = ({ crumbs }) => {
  return (
    <div>
      <BreadCrumbs crumbs={crumbs} />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
