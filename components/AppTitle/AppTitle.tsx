import { AppTitleProps } from "@/models/props.model";
import Loader from "../Loader/Loader";

const AppTitle = ({ title, slogan, imageUrl }: AppTitleProps) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600">{slogan}</p>
        </div>
        {imageUrl && (
          <div className="mt-4">
            <img src={imageUrl} alt={title} className="w-50 w-full rounded-lg" />
          </div>
        )}
      </div>
    );
  };
  
  export default AppTitle;
  