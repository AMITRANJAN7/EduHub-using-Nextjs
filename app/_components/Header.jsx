"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import { Search, ShoppingCart, User } from 'lucide-react'
import Link from 'next/link'
import Sidebar from './Sidebar';
import { useCart } from '@/app/_context/CartContext';



const products = [
  { name: 'Data Analytics', description: 'Get a better understanding of your traffic', href: '/allcourses', icon: ChartPieIcon },
  { name: 'Public Engagement', description: 'Speak directly to your customers', href: '/allcourses', icon: CursorArrowRaysIcon },
  { name: 'CyberSecurity', description: 'Your customers’ data will be safe and secure', href: '/allcourses', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '/allcourses', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '/allcourses', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '/videotutorials', icon: PlayCircleIcon },
  { name: 'Contact Helpline', href: '/OurHelpline', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CartHandling() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const { getCartItemCount } = useCart();


  return (
    <header className="bg-gradient-to-tl from-fuchsia-100 to bg-slate-50">
      <nav className="mx-auto my-1 flex max-w-5xl h-20 items-center justify-around p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 ">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="">EduHub</span>
            <img src="/logo.png" alt="logo" width={50} height={80} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-blue-500"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          

          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900  hover:text-blue-700">
            Home
          </Link>
          <Link href="/aboutus" className="text-sm font-semibold leading-6 text-gray-900  hover:text-blue-700">
            About Us
          </Link>
          <Link href="/teachoneduhub" className="text-sm font-semibold leading-6 text-gray-900  hover:text-blue-700">
            Teach on Eduhub
          </Link>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900  hover:text-blue-700">
              Classes
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400  hover:text-blue-700" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <Link href={item.href} className="block font-semibold text-gray-900  hover:text-blue-700 ">
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-600 ">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 ">
                  {callsToAction.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900  hover:bg-blue-500"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-10">
          {/*<a href="#" className="text-sm font-semibold leading-6 text-gray-900 ">
            Log in <span aria-hidden="true">&rarr;</span>
                </a>*/}
          <Search className='h-6 w-6 text-gray-600  hover:text-blue-700'/>
            
        <Link href='/Login'>
        <User className='h-6 w-6 text-gray-600  hover:text-blue-700'/>
        </Link>         

           {/*SHOPPING CART */}
          <button onClick={openSidebar}>
          <ShoppingCart className='h-6 w-6 text-gray-600  hover:text-blue-700'/>

          {getCartItemCount() > 0 && (
          <span className="absolute bg-red-500 text-white flex justify-center items-center px-2 rounded-full">
            {getCartItemCount()}
          </span>
        )}

          </button>
          <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
        </div>

      </nav>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
             <Image src= "/logo.png" alt='logo' width={50} height={50} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700  hover:bg-blue-500 "
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
             <div className="-m-2.5 p-2.5 mt-2 rounded text-gray-700  flex justify-end gap-x-8 hover:text-blue-600 " >
             <Search className='h-6 w-6 text-gray-700 hover:text-red-700 '/>             
             <button onClick={openSidebar}>
          <ShoppingCart className='h-6 w-6 text-gray-600  hover:text-blue-700'/>

          {getCartItemCount() > 0 && (
          <span className="absolute bg-red-500 text-white flex justify-center items-center px-2 rounded-full">
            {getCartItemCount()}
          </span>
        )}

          </button>
          <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />
             </div>    
              <div className="space-y-2 py-6">
                
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-500"
                >
                  Home
                </Link>
                <Link
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-500"
                >
                  About Us
                </Link>
                <Link
                  href="/teachoneduhub"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-500"
                >
                  Teach on Eduhub
                </Link>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-blue-500">
                        Classes
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-blue-500"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

              </div>
              < div className="py-6">
                <Link
                  href="/Login"
                  className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 gap-x-8 text-gray-900 flex hover:bg-blue-500"
                >
                 <User className='h-6 w-6 text-gray-600'/>  Log in
                </Link>
                
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog> 
    </header>
  )
}
