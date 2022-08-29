import style from "./style.module.css";

const Image = ({ result }) => {
  return (
    <div className={style.container}>
      <img src={result.imageUrl} alt={result.altTag} />
      <div className={style.info}>
        <h3 className={style.title}>
          {result.altTag.length > 0
            ? `${result.altTag.substring(0, 40)}`
            : `${result.siteTitle.substring(0, 40)}...`}
        </h3>
        <a href={result.siteURL}>{result.siteURL.substring(0, 40)}...</a>
      </div>
    </div>
  );
};

export default Image;
