
import MultiStepForm from "@/components/_ui/common/BookForm";

export default function Schedule() {
    return (
        <div className="w-full min-h-screen bg-[url('/images/common/hero-bg.svg')] lg:bg-contain  bg-primary-hard center-all flex-col">
            <div className={`w-full `} >
                <MultiStepForm />
            </div>
        </div>
    );
}
