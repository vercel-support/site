import Card from "./card";
import Img from "react-optimized-image";

const MediaCard = ({ image, children, title }) => {
  return (
    <Card className="relative w-full transition-all ease-in-out duration-200 group transform hover:translate-y-px hover:shadow-md">
      <div>
        <Img
          webp
          src={require(`../../content/posts/images/${image}`)}
          className="object-cover w-full h-64"
        />
      </div>

      <div className="flex flex-col flex-1 p-6">
        {title}
        {children}
      </div>
    </Card>
  );
};

export default MediaCard;
