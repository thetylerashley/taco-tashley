import Link from 'next/link';
import Image from 'next/image';

const navigation = [
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Articles', href: 'posts' },
    { name: 'Contact', href: '#' },
    ]
          
export default function Header() {
return (
    <header className="bg-[#173C34]">
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
                <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <Image width={132} height={56} className="h-10 w-auto" src="images/tyler-ashley-co_logo_white.svg" alt="" />
                </Link>
                {/* <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                    <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                    </Link>
                ))}
                </div> */}
            </div>
            {/* <div className="ml-10 space-x-4">
                <Link
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                >
                Sign in
                </Link>
                <Link
                href="#"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                Sign up
                </Link>
            </div> */}
        </div>
        {/* <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
            {link.name}
            </a>
        ))}
        </div> */}
    </nav>
    </header>
)
}