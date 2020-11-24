import Link from 'next/link';

const Nav = ({pages}) => {
    return (
        <ul className="flex items-center space-x-6">
            {pages.map(page => (
                <li key={page.href}>
                    <Link href={page.href}>
                        <a className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">{page.label}</a>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;