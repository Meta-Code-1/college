import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import pankaj from '../assets/pankaj.jpg'

export default function Information() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const teacher = [
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
    ]
    const Nursing = [
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
    ]
    const nonNursing = [
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
        {
            name: 'Dr.Pankaj',
            role: 'Dean of Faculty',
            imageUrl:
                pankaj,
        },
    ]
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl" data-aos="fade-right">
                            Teaching Staff
                        </h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {teacher.map((person) => (
                            <li key={person.name} data-aos="fade-up">
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                    />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-20 mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl" data-aos="fade-right">
                            Nursing Staff
                        </h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {Nursing.map((person) => (
                            <li key={person.name} data-aos="fade-up">
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                    />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-20 mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl" data-aos="fade-right">
                            Non-Nursing Staff
                        </h2>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {nonNursing.map((person) => (
                            <li key={person.name} data-aos="fade-up">
                                <div className="flex items-center gap-x-6">
                                    <img
                                        alt=""
                                        src={person.imageUrl}
                                        className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                    />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}
