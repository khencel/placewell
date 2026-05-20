import Banner from "@/components/Banner"
import s from "@/styles/protech.module.css"

const courses = [
    { icon: "🏠", title: "Domestic Work NC II",              meta: "TESDA Accredited" },
    { icon: "🛎️", title: "Housekeeping NC II",               meta: "TESDA Accredited" },
    { icon: "🎪", title: "Events Management Services NC II", meta: "TESDA Accredited" },
    { icon: "🍽️", title: "Food and Beverage Services NC II", meta: "TESDA Accredited" },
    { icon: "📋", title: "Trainers Methodology Level I",     meta: "TESDA Accredited" },
    { icon: "❤️", title: "Caregiving NC II",                  meta: "TESDA Accredited" },
    { icon: "🏥", title: "Health Care Services NC II",       meta: "TESDA Accredited" },
]

export default function ProTech() {
    return (
        <>
            <Banner
                backgroundImage="/img/banner/proTechBanner.png"
                title="Departments and Facilities"
                subtitle="Pro Tech Skills"
                description="Our TESDA accredited Hospitality and Caregiving Training Center"
            />

            <section className="mt-5 mb-5">
                <div className="row m-0 justify-content-center">
                    <div className="col-md-10">

                        {/* ── HERO ── */}
                        <div className={s.proTechHero}>
                            <div className={s.heroContent}>
                                <div className={s.heroLeft}>
                                    <p className={s.heroEyebrow}>TESDA Accredited Center</p>
                                    <h2 className={s.heroTitle}>
                                        Pro-Tech Skills<br />
                                        <em>Development Center</em>
                                    </h2>
                                    <p className={s.heroDesc}>
                                        Pro-Tech Skills Development Center Corporation is Placewell’s affiliated TESDA accredited training center. 
                                    </p>
                                </div>

                                <div className={s.heroRight}>
                                    <div className={s.accreditBadge}>
                                        <span>TESDA</span>
                                        <span>NC II</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── COURSES ── */}
                        <div className={s.coursesSection}>
                            <p className={s.sectionLabel}>What We Offer</p>
                            <h3 className={s.sectionTitle}>
                                Certified Courses &amp; Programs
                            </h3>

                            <div className={s.coursesGrid}>
                                {courses.map((c, i) => (
                                    <div className={s.courseCard} key={i}>
                                        <div className={s.courseIcon}>{c.icon}</div>
                                        <div className={s.courseCardBody}>
                                            <p className={s.courseCardTitle}>{c.title}</p>
                                            <p className={s.courseCardMeta}>{c.meta}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── GALLERY ── */}
                        <section className={s.gallerySection}>
                            <div className={s.galleryInner}>
                                <div className={s.gallerySplit}>

                                    {/* Text side */}
                                    <div className={s.galleryText}>
                                        <p className={s.sectionLabel}>Our Facilities</p>
                                        <h3 className={s.galleryHeadline}>
                                            A Space Built for Real-World Training
                                        </h3>
                                        <p className={s.gallerySubtext}>
                                            Our training facilities are designed to simulate actual
                                            professional environments — giving students hands-on
                                            experience that prepares them for immediate deployment
                                            locally and abroad.
                                        </p>

                                        <div className={s.statsRow}>
                                            <div className={s.statItem}>
                                                <span className={s.statNumber}>7+</span>
                                                <span className={s.statDesc}>NC II Courses</span>
                                            </div>
                                            <div className={s.statItem}>
                                                <span className={s.statNumber}>100%</span>
                                                <span className={s.statDesc}>TESDA Certified</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mosaic photo grid */}
                                    <div className={s.mosaicGrid}>
                                        <div className={s.tileTall}>
                                            {/* DSC03209.jpg */}
                                            <img src="/img/pro-tech/DSC03209.jpg" alt="Training facility" />
                                        </div>
                                        <div className={s.tileTopRight}>
                                            <img src="/img/pro-tech/DSC03175.jpg" alt="Caregiving training" />
                                        </div>
                                        <div className={s.tileBottomRight}>
                                            <img src="/img/pro-tech/DSC03556.jpg" alt="Food and beverage training" />
                                        </div>
                                        <div className={s.tileWideBottom}>
                                            <img src="/img/pro-tech/DSC03579.jpg" alt="Housekeeping training" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
        </>
    )
}