import ImageStyle from "./ImageStyle"


interface ImageLeftProps {
    image?:         string;
    title?:         string;
    subtitle?:      string;
    description?:   string;
} 

export default function ImageRightSection({image, title, subtitle, description}:ImageLeftProps){
    return(
        <section>
          <div className="row justify-content-center m-0">
            <div className="col-md-10">
                <div className="row">
            
                  <div className="col-md-6 d-flex align-items-center">
                    <div >
                      <span className="title">{title} </span>
                        <br />
                        <span className="subtitle">{subtitle}</span>
                        <p>
                          {description} 
                        </p>
                    </div>
                  </div>

                  <div className="col-md-6 text-end">
                    <ImageStyle image={image} />
                  </div>
                </div>
            </div>
          </div>
        </section>
    )
}