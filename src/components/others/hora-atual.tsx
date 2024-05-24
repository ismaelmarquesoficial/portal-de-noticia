"use client";
import React, { useEffect, useState } from "react";

export const HoraAtual = function (){

    const [horaAtual, setHoraAtual] = useState<Date | null>(null);

    useEffect(() => {
        const atualizarhora = () => {
            setHoraAtual(new Date());
        };

        atualizarhora();

        const intervalo = setInterval(atualizarhora, 1000);
        
        return () => {
            clearInterval(intervalo)
        };

    },[]);

    return(
        <div>
            <p>{horaAtual ? horaAtual.toLocaleTimeString() : 'Carregando'}</p>
        </div>
    )

}