'use client';
import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget"
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
    const widget = {
        label:    'Contador',
        title:    `${ useAppSelector( state => state.counter.count ) }`,
        subtitle: 'Carrito de compras', 
        icon:     <IoCafeOutline size={50} className="text-blue-500" />,
        href:     '/dashboard/counter',
    }

    return (
        <div className="flex flex-wrap p-2 gap-5 justify-center">
            <SimpleWidget { ...widget } />
        </div>
    )
}
