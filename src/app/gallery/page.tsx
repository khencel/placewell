import Banner from "@/components/Banner"
import ProjectsGallery from "./LandingGallery"


export default function Gallery(){
    return(
        <>
            <Banner
                backgroundImage="/img/banner/gallery.jpg"
                title="Gallery"
                subtitle="Explore Our Gallery"
                description="Discover memorable moments, activities, achievements, and events captured through our gallery."
            />

            <ProjectsGallery />
        </>
    )
}