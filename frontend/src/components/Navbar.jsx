    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = () => [
    { name: 'Accueil', href: '/', current: true },
    { name: 'Clients', href: '/clients', current: false },
    { name: 'Produits', href: '/products', current: false },
];

const userNavigation = [
    { name: 'Your Profile', href: '/' },
    { name: 'Settings', href: '/' },
    { name: 'Sign out', href: '/' },
];

const combineClassNames = (...classes) => classes.filter(Boolean).join(' ');

// Classes communes pour la lisibilité
const commonLinkClasses = 'rounded-md px-3 py-2 font-medium';
const activeNavLinkClasses = 'bg-gray-900 text-white';
const inactiveNavLinkClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white';

const DesktopMenu = () => (
    <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
            {navigation.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={combineClassNames(
                        item.current ? activeNavLinkClasses : inactiveNavLinkClasses,
                        commonLinkClasses,
                        'text-sm'
                    )}
                >
                    {item.name}
                </a>
            ))}
        </div>
    </div>
);

const ProfileMenu = () => (
    <Menu as="div" className="relative ml-3">
        <div>
            <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img alt="" src={user.imageUrl} className="rounded-full size-8" />
            </MenuButton>
        </div>
        <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
            {userNavigation.map((item) => (
                <MenuItem key={item.name}>
                    <a
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        {item.name}
                    </a>
                </MenuItem>
            ))}
        </MenuItems>
    </Menu>
);

const MobileMenu = () => (
    <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
                <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={combineClassNames(
                        item.current ? activeNavLinkClasses : inactiveNavLinkClasses,
                        'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                >
                    {item.name}
                </DisclosureButton>
            ))}
        </div>
        <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                <img alt="" src={user.imageUrl} className="size-10 rounded-full" />
                <div className="ml-3">
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                    type="button"
                    className="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                </button>
            </div>
            <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        {item.name}
                    </DisclosureButton>
                ))}
            </div>
        </div>
    </DisclosurePanel>
);

export default function Navbar() {
    return (
        <div className="min-mh-full">
            <Disclosure as="nav" className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                className="size-8"
                            />
                            <DesktopMenu/>
                        </div>
                        <div className="hidden md:block">
                            <ProfileMenu/>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <DisclosureButton
                                className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden"/>
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block"/>
                            </DisclosureButton>
                        </div>
                    </div>
                </div>
                <MobileMenu/>
            </Disclosure>
        </div>
    );
}


