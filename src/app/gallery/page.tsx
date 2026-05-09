import Banner from "@/components/Banner"
import ProjectsGallery from "./LandingGallery"


export default function Gallery(){
    return(
        <>
            <Banner
                backgroundImage="/img/banner/gallery.jpg"
                title="Gallery"
                subtitle="Explore Our Gallery"
                description="With over 15 branches nationwide, Placewell has a strong presence in the Philippines and recruits workers from all over the country. Our branch offices are located in key cities and provinces, allowing us to connect with a wide pool of talented Filipino workers and provide them with the support they need throughout the recruitment and deployment process."
            />

            <ProjectsGallery />
        </>
    )
}