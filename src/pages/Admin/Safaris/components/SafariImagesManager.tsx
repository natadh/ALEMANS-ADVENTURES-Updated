import { useEffect, useState } from "react";

interface Image {
  id: number;
  safari_id: string;
  src: string;
  alt: string;
  caption: string;
}

interface Props {
  safariId: string;
}

export default function SafariImagesManager({ safariId }: Props) {
  const [images, setImages] = useState<Image[]>([]);
  const [loadingImages, setLoadingImages] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [newImage, setNewImage] = useState({
    alt: "",
    caption: "",
  });

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchImages();
  }, [safariId]);

  const fetchImages = async () => {
    setLoadingImages(true);

    try {
      const res = await fetch(
        `${API_BASE}/safaris/getImages.php?safari_id=${safariId}`
      );

      const data = await res.json();

      if (data.success) {
        setImages(data.data);
      }
    } catch {
      console.error("Failed to load images");
    }

    setLoadingImages(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];

    if (!selected) return;

    setFile(selected);

    const objectUrl = URL.createObjectURL(selected);
    setPreview(objectUrl);
  };

  const handleDeleteImage = async (imageId: number) => {
    if (!confirm("Delete this image?")) return;

    const form = new FormData();
    form.append("id", imageId.toString());

    try {
      const res = await fetch(
        `${API_BASE}/safaris/images/deleteImage.php`,
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

      if (data.success) {
        setImages((prev) => prev.filter((img) => img.id !== imageId));
      }
    } catch {
      alert("Failed to delete image");
    }
  };

  const handleAddImage = async () => {

    if (!file) {
      alert("Please select an image");
      return;
    }

    const form = new FormData();
    form.append("safari_id", safariId);
    form.append("image", file);
    form.append("alt", newImage.alt);
    form.append("caption", newImage.caption);

    try {
      const res = await fetch(
        `${API_BASE}/safaris/images/addImage.php`,
        {
          method: "POST",
          body: form,
        }
      );

      const data = await res.json();

      if (data.success) {
        const createdImage: Image = {
          id: data.id,
          safari_id: safariId,
          src: data.src,
          alt: newImage.alt,
          caption: newImage.caption,
        };

        setImages((prev) => [...prev, createdImage]);

        // reset form
        setFile(null);
        setPreview(null);
        setNewImage({ alt: "", caption: "" });
        setShowAdd(false);
      } else {
        alert(data.message);
      }
    } catch {
      alert("Upload failed");
    }
  };

  return (
    <div className="mt-6">

      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">Safari Images</h4>

        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
          onClick={() => setShowAdd(!showAdd)}
        >
          {showAdd ? "Cancel" : "Add Image"}
        </button>
      </div>

      {showAdd && (
        <div
          className="space-y-3 mb-5 border p-3 rounded"
        >

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          {preview && (
            <div className="mt-2">
              <p className="text-sm mb-1">Preview:</p>
              <img
                src={preview}
                className="w-48 h-32 object-cover rounded border"
              />
            </div>
          )}

          <input
            className="w-full border px-2 py-1 rounded"
            placeholder="Alt text"
            value={newImage.alt}
            onChange={(e) =>
              setNewImage({ ...newImage, alt: e.target.value })
            }
          />

          <input
            className="w-full border px-2 py-1 rounded"
            placeholder="Caption"
            value={newImage.caption}
            onChange={(e) =>
              setNewImage({ ...newImage, caption: e.target.value })
            }
          />

        <button
            type="button"
            onClick={handleAddImage}
            className="bg-green-600 text-white px-4 py-1 rounded text-sm"
        >
            Upload Image
        </button>
        </div>
      )}

      {loadingImages && <p>Loading images...</p>}

      <div className="grid grid-cols-3 gap-3">
        {images.map((img) => (
          <div
            key={img.id}
            className="border rounded p-2 text-center"
          >
            <img
              src={`${API_BASE}${img.src}`}
              alt={img.alt}
              className="w-full h-24 object-cover rounded mb-2"
            />

            <button
              type="button"
              className="text-sm bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => handleDeleteImage(img.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {images.length === 0 && !loadingImages && (
        <p className="text-sm text-gray-500">
          No images yet
        </p>
      )}
    </div>
  );
}