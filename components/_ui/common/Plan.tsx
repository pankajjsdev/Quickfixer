import { CHOOSE_PLANS_CONTEXT } from "@/services/data";
import PlanTick from "@/public/images/common/plan_tick.svg";
import Image from "next/image";
import { useState } from "react";
import Button from "../button";

interface Plan {
    title: string;
    price: string;
    description: string;
    specification: string[];
}

interface ChoosePlanProps {
    onSubmit: () => void;
}

const ChoosePlan: React.FC<ChoosePlanProps> = ({ onSubmit }) => {
    const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

    const handlePlanSelect = (index: number) => {
        setSelectedPlan(index);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedPlan !== null) {
            onSubmit();
        } else {
            console.error('Please select a plan.');
        }
    };

    return (
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">{CHOOSE_PLANS_CONTEXT.title}</h1>
                <p className="text-lg text-gray-600">{CHOOSE_PLANS_CONTEXT.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CHOOSE_PLANS_CONTEXT.plans?.map((plan: Plan, index: number) => {
                    const isSelected = selectedPlan === index;
                    return (
                        <div
                            key={index}
                            className={`border rounded-lg p-6 transition-transform transform hover:scale-105 ${isSelected ? 'bg-primary-hard text-white' : 'bg-white text-gray-800'} shadow-lg cursor-pointer`}
                            onClick={() => handlePlanSelect(index)}
                        >
                            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
                            <h3 className="text-xl font-bold mb-4">{plan.price}</h3>
                            <p className="mb-4">{plan.description}</p>
                            <ul className="space-y-3">
                                {plan.specification.map((item, index2) => (
                                    <li key={index2} className="flex items-center space-x-2">
                                        <Image
                                            src={PlanTick}
                                            width={20}
                                            height={20}
                                            alt=""
                                            className={`${isSelected ? 'text-white' : 'text-primary-hard'}`}
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className="mt-8 text-center">
                <Button
                    title="Submit"
                    onClick={handleFormSubmit}
                    classsName={`w-1/2 py-3 border rounded-lg transition-colors ${selectedPlan !== null ? 'bg-primary-soft text-white hover:bg-primary-hard' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
                />
            </div>
        </div>
    );
};

export default ChoosePlan;
