import Banner from "@/components/Banner"
import TradeTestItem from "./tradeTestItem"
import { getData } from "./data"

export default function TradeTest() {
    const data = getData();
    return (
        <>
            <Banner
                backgroundImage="/img/banner/welding.jpg"
                title="Our Services"
                subtitle="Trade Tests"
                description="We conduct Trade Tests at our own facility"
            />

            <div className="row justify-content-center m-0">
                <div className="col-md-10">
                    {data.map((item) => (
                        <TradeTestItem key={item.number} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}