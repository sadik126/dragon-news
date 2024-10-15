import Marquee from "react-fast-marquee";

const Breakingnews = () => {
  return (
    <div className="flex mt-8">
      <button className="btn btn-error">Breaking news</button>
      <Marquee pauseOnHover={true} speed={100}>
        আসসালামু আলাইকুম , আমি আপনাদের প্রিয় সাদিক বলছি 😎
      </Marquee>
    </div>
  );
};

export default Breakingnews;
