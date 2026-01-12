import type { Category } from "../types/safari";
import { collectCategoryImages } from "../utils/images";
import { useImageCycle } from "../hooks/useImageCycle";

export default function CategoryCard({
  category,
  onSelect
}: {
  category: Category;
  onSelect: (id: string) => void;
}) {
  const images = collectCategoryImages(category);
  const activeImage = useImageCycle(images);

  return (
    <div
      onClick={() => onSelect(category.id)}
      className="group cursor-pointer bg-white shadow-md hover:shadow-xl transition overflow-hidden"
    >
      <div className="relative h-60 overflow-hidden">
        {activeImage && (
          <img
            src={activeImage}
            alt={category.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium tracking-wide">
          {category.title}
        </h3>
        {category.description && (
          <p className="text-sm text-gray-600 mt-1">
            {category.description}
          </p>
        )}
      </div>
    </div>
  );
}
