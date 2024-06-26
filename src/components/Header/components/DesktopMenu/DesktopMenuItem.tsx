import {Link} from "react-router-dom";



interface MenuItemProps {
  to: string,
  name: string
}

function DesktopMenuItem({to, name}: MenuItemProps) {

  return (
    <li className="mr-6">
      <Link
        to={to}
        className="text-gray-600 dark:text-gray-300 font-medium"
      >
        {name}
      </Link>
    </li>
);
}

export default DesktopMenuItem;