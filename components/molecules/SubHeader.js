const SubHeader = ({ text, data }) => (
  <div
    className="SubHeader"
    style={
      !data && {
        backgroundImage: `url("https://images.prismic.io/pablopvsky/f60ccbfb-5f89-4d38-a592-0397a02696df_pablopvsky-subheader.jpg?auto=compress,format")`,
      }
    }
  >
    <div className="halo smash">
      {text && <h1 className="content-center light centertxt">{text}</h1>}
      <h2 className="content-center " aria-label="Pablopvsky">
        <div className="glyphsSprite p p-logo" />
      </h2>
    </div>
  </div>
);

export default SubHeader;
