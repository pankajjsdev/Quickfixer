'use client'

import { CHOOSE_PLANS_CONTEXT } from "@/services/data";
import PlanTick from "@/public/images/common/plan_tick.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";

function ChoosePlan() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (index:any) => {
        setSelectedPlan(index);
    };

    return (
        <div className="container my-[6rem]">
            <div className="my-3">
                <h1 className="text-center text-6xl font-semibold">{CHOOSE_PLANS_CONTEXT.title}</h1>
                <p className="text-center text-sm font-semibold">{CHOOSE_PLANS_CONTEXT.description}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    CHOOSE_PLANS_CONTEXT.plans?.map((plan, index) => {
                        const isSelected = selectedPlan === index;
                        return (
                            <div 
                                key={index} 
                                className={`border shadow border-secondary-yellow1 rounded-lg p-6 cursor-pointer ${isSelected ? ' bg-primary-hard text-white' : ''} `} 
                                onClick={() => handlePlanSelect(index)}
                            >
                                <h1 className="m3-6 text-3xl font-semibold">{plan.title}</h1>
                                <h2 className="text-2xl font-bold my-3">{plan.price}</h2>
                                <p className="text-sm my-3">{plan.description}</p>
                                <ul className="space-y-3 my-6">
                                    {
                                        plan.specification.map((item, index2) => {
                                            return (
                                                <li key={index2} className="flex items-center space-x-2">
                                                    <span>
                                                        <Image 
                                                            src={PlanTick}
                                                            width={20}
                                                            height={20}
                                                            alt=""
                                                            className={`${isSelected ? 'text-white' : 'text-red-700'} `}
                                                        />
                                                    </span>
                                                    <span> {item}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                                <Button
                    title="Let’s Go"
                    classsName={`w-1/2 py-3 border text-black bg-white border-secondary-yellow1 ${isSelected ? 'bg-primary-soft text-white' : ''} `}
                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ChoosePlan;
