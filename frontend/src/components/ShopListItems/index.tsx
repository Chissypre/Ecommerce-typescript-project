import { furnitureData } from "./mock";

const ShopListItems = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {furnitureData.map((item) => (
                <div
                    key={item.id}
                    className="p-2 shadow-sm hover:shadow-md transition-shadow "
                >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover mb-2 rounded-md"
                    />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ShopListItems;
