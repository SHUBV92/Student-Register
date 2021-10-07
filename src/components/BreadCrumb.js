import { Breadcrumbs } from '@material-ui/core';


export default function BreadCrumb({ crumbs }) {
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div>
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
}

export default Breadcrumbs;
