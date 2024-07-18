import { useGetProductField } from "@/api/getProductField";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Filterstype } from "@/interfaces/filters";

interface filterControl {
    setFilterTaste: (origin: string) => void
}


const FilterOrigin = (props: filterControl) => {
    const { setFilterTaste } = props
    const { result, loading }: Filterstype = useGetProductField();
    console.log(result)
    return (
        <div className="my-5">
            <p className="mb-3 font-bold">Sabor</p>
            {loading && result === null && (
                <p>Loading...</p>
            )}
            <RadioGroup onValueChange={(value) => setFilterTaste(value)}>
                {result !== null && result.schema.attributes.taste.enum.map((origin: string) => (
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
