'use client'

import React, { useState } from 'react';

interface Article {
  date: string;
  time: string;
  author: string;
  avatar: string;
  title: string;
  content: string;
  image: string;
  link: string;
}

interface StaffData {
  name: string;
  position: string;
  avatar: string;
  contact: {
    email: string;
    birthdate: string;
    gender: string;
    phone: string;
    website: string;
  };
  description: string;
  current_roles: string[];
  experience: string[];
  achievements: string[];
  social_contributions: string[];
  leadership_philosophy: string;
  articles: Article[];
}

const StaffForm: React.FC = () => {
  const [formData, setFormData] = useState<StaffData>({
    name: '',
    position: '',
    avatar: '',
    contact: {
      email: '',
      birthdate: '',
      gender: '',
      phone: '',
      website: 'https://theptaydo.com'
    },
    description: '',
    current_roles: [''],
    experience: [''],
    achievements: [''],
    social_contributions: [''],
    leadership_philosophy: '',
    articles: []
  });

  const [jsonOutput, setJsonOutput] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    field?: keyof StaffData['contact']
  ) => {

    const { name, value } = e.target;

    if (field) {
      setFormData(prev => ({
        ...prev,
        contact: {
          ...prev.contact,
          [field]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleArrayChange = (field: keyof StaffData, index: number, value: string) => {
    setFormData(prev => {
      const updatedArray = [...(prev[field] as string[])];
      updatedArray[index] = value;
      return {
        ...prev,
        [field]: updatedArray
      };
    });
  };

  const addArrayItem = (field: keyof StaffData) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...(prev[field] as string[]), '']
    }));
  };

  const handleGenerateJSON = () => {
    setJsonOutput(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-bold">Nhập thông tin nhân sự</h2>

      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Họ tên"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Chức vụ"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Avatar URL"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
          className="border p-2 col-span-2"
        />

        <select
          value={formData.contact.gender}
          onChange={(e) => handleChange(e, 'gender')}
          className="border p-2"
        >
          <option value="">-- Chọn giới tính --</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
        </select>

        <input
          type="text"
          placeholder="Ngày sinh"
          value={formData.contact.birthdate}
          onChange={e => handleChange(e, 'birthdate')}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Giới tính"
          value={formData.contact.gender}
          onChange={e => handleChange(e, 'gender')}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Điện thoại"
          value={formData.contact.phone}
          onChange={e => handleChange(e, 'phone')}
          className="border p-2"
        />
        <input
          type="text"
          placeholder="Website"
          value={formData.contact.website}
          onChange={e => handleChange(e, 'website')}
          className="border p-2 col-span-2"
        />
      </div>

      <textarea
        placeholder="Mô tả ngắn"
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="border p-2 w-full h-24"
      />

      {(['current_roles', 'experience', 'achievements', 'social_contributions'] as const).map(
        (field) => (
          <div key={field}>
            <label className="font-semibold capitalize block mb-1">{field.replace('_', ' ')}</label>
            {(formData[field] as string[]).map((item, index) => (
              <input
                key={index}
                type="text"
                value={item}
                onChange={e => handleArrayChange(field, index, e.target.value)}
                className="border p-2 w-full mb-1"
              />
            ))}
            <button
              type="button"
              className="text-blue-600 text-sm underline"
              onClick={() => addArrayItem(field)}
            >
              + Thêm mục
            </button>
          </div>
        )
      )}

      <div>
        <label className="font-semibold block mb-1">Triết lý lãnh đạo</label>
        <textarea
          placeholder="Triết lý"
          name="leadership_philosophy"
          value={formData.leadership_philosophy}
          onChange={handleChange}
          className="border p-2 w-full h-20"
        />
      </div>

      <button
        onClick={handleGenerateJSON}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Xuất JSON
      </button>

      {jsonOutput && (
        <div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Kết quả JSON</h3>
          <textarea
            className="w-full h-80 p-4 border font-mono text-sm"
            value={jsonOutput}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default StaffForm;
