import Link from "next/link";

const NavLink = ({ href = '#', title = 'N Title' }) => {
  return (
    <Link href={href} className="menu-item">
      {title}
    </Link>
  );
};

export default NavLink;
