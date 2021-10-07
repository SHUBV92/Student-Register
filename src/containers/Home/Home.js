import BreadCrumb from '../../components/BreadCrumb';

const Home = ({ crumbs }) => {
  return (
    <div>
      <BreadCrumb crumbs={crumbs} />
      <h2>Home</h2>
    </div>
  );
};

export default Home;
