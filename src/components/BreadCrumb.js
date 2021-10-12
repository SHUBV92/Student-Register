import { Link } from 'react-router-dom';

const BreadCrumbs = ({ crumbs }) => {
  if (!crumbs || crumbs.length <= 1) {
    console.log('Breadcrumbs');
    return null;
  }

  return (
    <div>
      shubs
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>{name}</span>
        ) : (
          <Link key={key} to={path}>
            {name}
          </Link>
        )
      )}
    </div>
  );
};

export default BreadCrumbs;
