'use client';

import { createActivity, uploadImg } from "@/app/api/activity";
import { useState } from "react";

export default function TestActivityPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleTest = async () => {
    if (!file) return alert("파일을 선택해주세요.");

    // 1. 이미지 업로드 테스트
    const formData = new FormData();
    formData.append('file', file);
    
    const uploadRes = await uploadImg(formData);
    
    if (uploadRes.url) {
      const activityRes = await createActivity({
        title: "테스트 제목",
        content: "테스트 내용입니다.",
        image: uploadRes.url
      });

      if (activityRes.status === 200) {
        alert("활동 생성 성공!");
      } else {
        alert(`에러: ${activityRes.message}`);
      }
    } else {
      alert(`업로드 실패: ${uploadRes.message}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Activity API 테스트</h1>
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files?.[0] || null)} 
        className="mb-4 block"
      />
      <button 
        onClick={handleTest}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        업로드 및 생성 실행
      </button>
    </div>
  );
}