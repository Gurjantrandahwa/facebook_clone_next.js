import React from "react";
import Image from "next/image";
import {
    HomeIcon,
    MagnifyingGlassIcon,
    Squares2X2Icon,
    ChatBubbleOvalLeftEllipsisIcon,
    BellAlertIcon,
} from "@heroicons/react/24/solid";
import {
    BuildingStorefrontIcon,
    PlayCircleIcon,
    PuzzlePieceIcon,
    UsersIcon
} from "@heroicons/react/24/outline";
import HeaderIcon from "./HeaderIcon";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export default function Header() {
    return <div className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md"}>
        {/*left*/}
        <div className={"flex items-center"}>
            <Image
                src={"https://links.papareact.com/5me"}
                width={40}
                height={40}
                layout={"fixed"}/>
            <div className={"flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
                <MagnifyingGlassIcon className={"h-6 text-gray-600"}/>
                <input
                    className={"hidden md:inline-flex flex-shrink m-1 items-center bg-transparent outline-none placeholder-gray-500"}
                    placeholder={"Search Facebook"}
                    type={"text"}/>
            </div>
        </div>
        {/*Center*/}
        <div className={"flex justify-center flex-grow"}>
            <div className={"flex space-x-6 md:space-x-2"}>
                <HeaderIcon active Icon={HomeIcon}/>
                <HeaderIcon Icon={UsersIcon}/>
                <HeaderIcon Icon={PlayCircleIcon}/>
                <HeaderIcon Icon={BuildingStorefrontIcon}/>
                <HeaderIcon Icon={PuzzlePieceIcon}/>

            </div>
        </div>
        {/* Right*/}
        <div className={"flex items-center sm:space-x-2 justify-end"}>
            {/*Profile*/}
            <p className={"font-semibold whitespace-nowrap pr-3"}>Gurjant Singh</p>
            <Squares2X2Icon className={"icon"}/>
            <ChatBubbleOvalLeftEllipsisIcon className={"icon"}/>
            <BellAlertIcon className={"icon"}/>
            <ChevronDownIcon className={"icon"}/>

        </div>
    </div>
}