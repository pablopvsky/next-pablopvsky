const SubHeader = ({ text, data }) => (
  <div className="SubHeader" >
    <div className="halo smash">
      {text && <h1 className="content-center light centertxt">{text}</h1>}
      <h2 className="content-center " aria-label="Pablopvsky">
        <div className="glyphsSprite p p-logo" />
      </h2>
    </div>
  </div>
);

export default SubHeader;
