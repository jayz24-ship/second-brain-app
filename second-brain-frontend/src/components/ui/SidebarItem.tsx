import React, { type ReactElement } from 'react'

interface SidebarItemTYpe {
    text:String,
    icon:ReactElement,
};

export function SidebarItem({text,icon}:SidebarItemTYpe){
    return (
        <div className='flex cursor-pointer '>
            <div>
                {icon}
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}