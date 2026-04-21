'use client'
import React, { useState, useEffect } from "react";
import { getFirebaseDb } from "@/lib/firebase";

type TimelineEntry = {
  date: string;
  title: string;
  description: string;
  type: "filled" | "outlined";
};

type TimelineData = {
  [year: string]: TimelineEntry[];
};

const defaultData: TimelineData = {
  "2024": [
    { date: "03.12", title: "연혁1", description: "연혁1 내용들", type: "filled" },
    { date: "03.12", title: "연혁2", description: "연혁2 내용들", type: "outlined" }
  ],
  "2025": [
    { date: "01.01", title: "계획1", description: "2025년 내용 예정입니다.", type: "outlined" }
  ]
};

export default function NDIETimeline() {
  const [timelineData, setTimelineData] = useState<TimelineData>(defaultData);
  const [selectedYear, setSelectedYear] = useState("2024");

  useEffect(() => {
    const loadData = async () => {
      try {
        const db = await getFirebaseDb();
        if (!db) return;

        const { doc, getDoc } = await import("firebase/firestore");
        const docRef = doc(db, "history", "timeline");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const firebaseData = docSnap.data() as TimelineData;
          // Firebase 데이터와 기본 데이터(defaultData)를 합쳐서 2024년이 사라지지 않게 합니다.
          const mergedData = { ...defaultData, ...firebaseData };
          setTimelineData(mergedData);

          // 데이터 로드 후 목록에 있는 연도 중 첫 번째 연도를 자동으로 선택합니다.
          const sortedYears = Object.keys(mergedData).sort((a, b) => a.localeCompare(b));
          if (sortedYears.length > 0) setSelectedYear(sortedYears[0]); // 2024가 먼저 선택됨
        }
      } catch (e) {
        console.error("연혁 로드 실패:", e);
      }
    };
    loadData();
  }, []);

  // 연도를 오름차순(2024 -> 2025)으로 정렬하여 버튼을 보여줍니다.
  const years = Object.keys(timelineData).sort((a, b) => a.localeCompare(b));
  const entries = timelineData[selectedYear] || [];

  return (
    <div className="text-black font-sans relative pl-8 md:pl-0 max-w-4xl mx-auto py-10">
      <h1 
        className="text-3xl font-bold mb-12 tracking-tight text-gray-800"
        style={{ fontFamily: 'ui-rounded, "Hiragino Maru Gothic ProN", "Quicksand", sans-serif' }}
      >
        엔디(<span className="text-[#FF8200]">NDIE</span>)의{" "}
        <span className="text-[#FF8200]">연혁</span>은 다음과 같습니다
      </h1>

      <div className="flex items-center gap-4 mb-10 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide">
        {years.map((year, index) => (
          <div key={year} className="flex items-center">
            <button
              className={`px-8 py-3 rounded-full font-black text-xl transition-all duration-300 transform 
                ${selectedYear === year 
                  ? "bg-[#FF8200] text-white shadow-lg scale-110 z-10" 
                  : "bg-gray-100 text-gray-400 hover:bg-gray-200 hover:scale-105"
                } active:scale-95 cursor-pointer`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </button>
            {index < years.length - 1 && (
              <div className="w-8 h-[2px] bg-gray-200 mx-2" />
            )}
          </div>
        ))}
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        <div className="relative bg-[#FFFDF0] border border-orange-100 rounded-xl shadow-xl p-8 md:p-12 min-h-[400px]">
          <div 
            className="absolute inset-0 opacity-20 pointer-events-none rounded-xl"
            style={{
              backgroundImage: 'linear-gradient(transparent 2.9rem, #FF8200 2.9rem)',
              backgroundSize: '100% 3rem',
              backgroundOrigin: 'content-box',
              paddingTop: '0rem' 
            }}
          />
          
          <div className="absolute left-10 md:left-16 top-0 bottom-0 w-[1px] bg-red-200" />

          <div className="relative z-10 pt-[0.2rem]">
            {entries.length > 0 ? entries.map((entry, index) => (
              <div key={index} className="pl-6 md:pl-10 mb-[3rem]">
                <div className="flex items-end gap-4 h-[3rem] pb-[0.5rem]">
                  <span className="text-[#FF8200] font-black text-xl">{entry.date}</span>
                  <h3 className="text-xl font-bold text-gray-800">{entry.title}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-[3rem] whitespace-pre-line ml-1">
                  {entry.description}
                </p>
              </div>
            )) : (
              <div className="text-center text-gray-400 py-20 italic">데이터가 없습니다.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}