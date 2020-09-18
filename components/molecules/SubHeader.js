const SubHeader = ({ text, data }) => (
  <div
    className="SubHeader"
    style={
      data && {
        backgroundImage: `url(${data?.subheader_cover.url})`,
      }
    }
  >
    <div className="halo smash">
      {text && <h1 className="content-center light centertxt">{text}</h1>}
    </div>
  </div>
);

export default SubHeader;
