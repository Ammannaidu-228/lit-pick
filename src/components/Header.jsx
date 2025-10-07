'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
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
import { Link } from 'react-router-dom'



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-gray-900/60 backdrop-blur-xl border-b border-white/5">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link to={'/'} className="flex items-center gap-3 group">
            <div className="relative size-10 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 p-[1px] overflow-hidden shadow-lg shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative h-full w-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                <div className="relative flex items-center justify-center w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 font-black text-2xl tracking-wider transform group-hover:scale-110 transition-transform duration-500">L</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-purple-300 to-pink-200">
                Lit Picks
              </p>
              <p className="text-[10px] font-medium text-gray-400 tracking-widest uppercase -mt-1">
                Book Recommendations
              </p>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Link 
            to={'/'} 
            className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            <span>Home</span>
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link 
            to={'/recommend'}
            className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            <span>Recommendations</span>
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link 
            to="/about" 
            className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
          >
            <span>About</span>
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900/95 backdrop-blur-xl p-6 sm:max-w-sm border-l border-white/5">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="flex items-center gap-3">
              <div className="relative size-9 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 p-[1px] overflow-hidden shadow-lg shadow-purple-500/20">
                <div className="relative h-full w-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="relative flex items-center justify-center w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(255,255,255,0))]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 via-purple-400 to-pink-400 font-black text-xl tracking-wider">L</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-purple-300 to-pink-200">
                  Lit Picks
                </p>
                <p className="text-[10px] font-medium text-gray-400 tracking-widest uppercase -mt-1">
                  Book Recommendations
                </p>
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2.5 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-white/5">
              <div className="space-y-1 py-6">
                <Link
                  to="/"
                  className="group -mx-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span className="size-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Home</span>
                </Link>
                <Link
                  to="/recommend"
                  className="group -mx-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span className="size-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>Recommendations</span>
                </Link>
                <Link
                  to="/about"
                  className="group -mx-3 flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  <span className="size-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>About</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
