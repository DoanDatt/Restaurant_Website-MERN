import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h3 className="text-xl md:text-2xl font-extrabold mb-6">AvailableMenu</h3>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
            alt="res_image"
            className="object-cover w-full h-40 rounded-lg shadow-lg"
          />
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tandoori Biryani
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <h3>
              Price: <span className="text-[#D19254]">80$</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full bg-(--orange) hover:bg-(--hoverOrange)">
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
