"use client"

import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { traineeApi } from "@/lib/api/trainee.api";
import Link from "next/link";
import { useEffect, useState } from "react";



const seedData = [
    {
        id: "T003",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtAtTGuyWUECaO5O_DnEUdtP8p0LW1izktw&s",
        nik: "29696969696969",
        name: "Sandyka Bala",
    },
    {
        id: "T004",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        nik: "29787878787878",
        name: "Andi Pratama",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T006",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
    {
        id: "T005",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        nik: "29856565656565",
        name: "Dewi Lestari",
    },
];


export default function Trainee(){

    const [trainees, setTrainees] = useState([] )

    useEffect(()=> {
        traineeApi.getTrainees().then((res) => {
            setTrainees(res)
        })
    }, [])

    return (

        <div className="min-h-screen bg-gray-50 ">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="flex">
                    <Card className="w-[90vw]">
                        <CardHeader>
                            <CardTitle className="text-gray-700">View All Trainee</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="mb-4 flex gap-2.5 items-center">
                                <label className="text-sm text-gray-600 mb-2">Phase</label>
                                <select className="w-fit max-w-xs p-2 border border-gray-300 rounded-md bg-white">
                                    <option>Pre Training</option>
                                </select>
                            </div>

                            <div className="flex justify-evenly gap-y-[1.5vw] flex-wrap ">
                                {trainees.map((item) => (
                                    <Link href={`/skill-map/${item.code}`}>
                                    <div
                                        key={item.id}
                                        className="w-fit max-w-xs p-2 border border-gray-300 rounded-md bg-white flex justify-center items-center flex-col gap-[1vw]"
                                    >
                                        <div>{item.code}</div>

                                        {
                                            item.profpic?
                                                <img
                                                    src={item.profpic}
                                                    className="w-full h-full object-cover rounded"
                                                    alt="trainee photo"
                                                />
                                                : 
                                                <img
                                                    src="https://img.freepik.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
                                                    className="w-[8vw] h-[12vw] object-cover rounded"
                                                    alt="trainee photo"
                                                />
                                        }

                                        <div className="flex items-center justify-center flex-col gap-2">
                                            <div>{item.code}</div>
                                            <div>{item.username}</div>
                                            <div>{item.nim}</div>
                                        </div>
                                    </div>
                                    </Link>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}