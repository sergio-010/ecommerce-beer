import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Filterstype } from "@/interfaces/filters";

interface filterControl {
    setFilterOrigin: (origin: string) => void
}


const FilterOrigin = (props: filterControl) => {
    const { setFilterOrigin } = props
    const { result, loading }: Filterstype = useGetProductField();

    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Origen</p>
            {loading && result === null && (
                <p>Loading...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.schema.attributes.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2">
                        <RadioGroupItem value={origin} id={origin}
                        />
                        <label htmlFor={origin}>{origin}</label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;
