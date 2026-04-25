import Banner from "@/components/Banner"

export default function AboutBranches() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/philippines.jpg"
                title="About Us"
                subtitle="Branch Offices"
                description="With over 15 branches nationwide, Placewell has a strong presence in the Philippines and recruits workers from all over the country. Our branch offices are located in key cities and provinces, allowing us to connect with a wide pool of talented Filipino workers and provide them with the support they need throughout the recruitment and deployment process."
            />

            <section>
                <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
            </section>
        </>
    )
}