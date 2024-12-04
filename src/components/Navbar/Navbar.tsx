/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, HeartIcon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    return (
        <nav>
            <div className="bg-primary text-xs text-center sm:px-8 p-1 text-gray-100">
                <span>Winter Sale for all winter clothes Free express delivery - OFF 50% <a className='mx-3 underline' href="#">Shop Now</a></span>
            </div>
            <Disclosure as="nav" className="shadow-lg">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 ">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                            </DisclosureButton>
                        </div>
                        <div className="flex items-center justify-center sm:items-stretch sm:justify-start mr-6">
                            <div className="flex shrink-0 items-center">
                                <span className='text-primary text-3xl'>
                                    Afnobazar
                                </span>

                                {/* <img
                                    alt="Your Company"
                                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                    className="h-8 w-auto"
                                /> */}
                            </div>

                        </div>

                        <div className="relative text-primary w-full">
                            <input
                                type="search"
                                name="search"
                                placeholder="Search"
                                className="h-10 px-5 pr-10 rounded-full w-[100%] text-sm border border-primary"
                            />
                            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                                <svg
                                    className="h-4 w-4 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 56.966 56.966"
                                    width="512px"
                                    height="512px"
                                >
                                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                                </svg>
                            </button>
                        </div>

                        {/* <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(200200
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div> */}

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                type="button"
                                className="relative rounded-full text-primary"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <HeartIcon aria-hidden="true" className="size-6" />
                            </button>




                            {/* Profile dropdown */}
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full ">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <a
                                            type="button"
                                            className="relative rounded-full text-primary"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <ShoppingCartIcon aria-hidden="true" className="size-6" />
                                        </a>
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                        >
                                            Your Profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                        >
                                            Settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                                        >
                                            Sign out
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </nav>
    )
}

export default Navbar