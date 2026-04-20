interface CustomHRProps {
  height?:string
}

export default function CustomHR({height="16px"}:CustomHRProps) {
  return (
    <>
        <div className="brand-stripe" style={{height:height}}>
            <div className="bar bg-accent"></div>
            <div className="bar bg-alt"></div>
        </div>
    </>
  );
}