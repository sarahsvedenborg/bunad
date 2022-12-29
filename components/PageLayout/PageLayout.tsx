import Link from "next/link";

export const PageLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/sting" passHref>
              Sting
            </Link>
          </li>
          <li>
            <Link href="/montering" passHref>
              Montering
            </Link>
          </li>
          <li>
            <Link href="/varianter">Varianter</Link>
          </li>
          <li>
            <Link href="/min-bunad" passHref>
              Min bunad
            </Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default PageLayout;
