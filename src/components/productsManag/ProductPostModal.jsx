import React, { useState } from "react";
import { useApi } from "../../context/ApiContext";
import { Image, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export default function ProductPostModal({
  isOpen,
  setIsOpen,
  defoultCategory,
}) {
  const { postProduct } = useApi();
  const [form, setForm] = useState({
    title: "",
    price: "",
    availability: "",
    image: "",
    category: defoultCategory,
  });

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  console.log(fileList);

  const handlePreview = (file) =>
    __awaiter(void 0, void 0, void 0, function* () {
      if (!file.url && !file.preview) {
        file.preview = yield getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setPreviewOpen(true);
    });

  const handleChangeImage = ({ fileList: newFileList }) =>
    setFileList(newFileList);
  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  const handleCustomUpload = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    formData.append("publicKey", "public_ZN8X+QWk2chUWA9fec9MXU5DRKc="); // <-- public key is still required for the upload API
  
    // Add the private key to the Authorization header (ensure it's stored securely)
    const privateKey = "private_jLFlOPVpNsBCnNvT6SVDVZvTdZ8="; // <-- Replace with your private key from ImageKit
  
    try {
      const res = await fetch(
        "https://upload.imagekit.io/api/v1/files/upload",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Basic ${btoa(privateKey + ":")}`, // Basic auth with your private key
          },
        }
      );
      const data = await res.json();
  
      if (res.ok) {
        setForm((prev) => ({ ...prev, image: data.url }));
        onSuccess(data);
      } else {
        onError(data);
      }
    } catch (err) {
      onError(err);
    }
  };
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { category, ...productData } = form;
    postProduct(category, { ...productData, category });
    console.log(category);

    setIsOpen(false);
  };
  console.log("Yuklangan rasm URL:", form.image);

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="!bg-[#1F1D2B] !p-6 rounded-lg w-[500px] shadow-lg relative flex flex-col justify-center items-start gap-6">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 text-2xl cursor-pointer"
          >
            ×
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-6"
        >
          <div className="w-full flex flex-col justify-center items-start gap-3">
            <label className="text-[14px] font-[500] text-white">
              * Category
            </label>
            <select
              defaultValue={defoultCategory}
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full !p-[10px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
            >
              <option value="hotdishes">Hot Dishes</option>
              <option value="colddishes">Cold Dishes</option>
            </select>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-3">
            <label className="text-[14px] font-[500] text-white">
              File Upload
            </label>
            <div className="!w-full flex  justify-center items-center">
              <Upload
                customRequest={handleCustomUpload} // bu yer o'zgartirildi
                listType="picture-card"
                style={{ width: "100%" }}
                className="!w-full"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChangeImage}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>

              {previewImage && (
                <Image
                  wrapperStyle={{ display: "none" }}
                  preview={{
                    visible: previewOpen,
                    onVisibleChange: (visible) => setPreviewOpen(visible),
                    afterOpenChange: (visible) =>
                      !visible && setPreviewImage(""),
                  }}
                  src={previewImage}
                />
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-6">
            <div className="w-full flex flex-col justify-center items-start gap-3">
              <label className="text-[14px] font-[500] text-white">
                * Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter Title"
                value={form.title}
                onChange={handleChange}
                className="w-full !p-[10px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                required
              />
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-3">
              <label className="text-[14px] font-[500] text-white">
                * Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                value={form.price}
                onChange={handleChange}
                className="w-full !p-[10px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                required
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-6">
            <div className="w-full flex flex-col justify-center items-start gap-3">
              <label className="text-[14px] font-[500] text-white">
                * Availability
              </label>
              <input
                type="text"
                name="availability"
                placeholder="Enter Availability"
                value={form.availability}
                onChange={handleChange}
                className="w-full !p-[10px] rounded-lg bg-[#2D303E] border border-[#393C49] outline-none text-white"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full !h-[48px] flex justify-center items-center !p-3.5 text-white bg-[#EA7C69] rounded-lg cursor-pointer text-[14px] font-[600] shadow-[0px_8px_24px_0px_#EA7C6966] hover:bg-[#ea7c698e] transition-all duration-300 active:scale-[80%]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
