"use client";
import React from "react";
import ContentContainer from "@/containers/main/ContentContainer";
import Image from "next/image";
import AboutImage from "@public/images/about.svg";
import LogoImage from "@public/images/logoL.svg";

const aboutDescription = `우리 사회는 급속한 디지털 전환과 함께 다양성과 격차에 대한 인식이 확대되고 있으나, 여전히 많은 이들이 기술적, 언어적, 인지적 장벽으로 인해 소외받고 있다. 사단법인 디지털과포용성네트워크는 이런한 현실에 주목하여, 디지털 환경을 포함한 사회 전반에서 모든 구성원이 자신의 고유한 특성과 잠재력을 발휘할 수 있는 포용성 디지털 사회를 구현하고자 설립하게 되었다.`;

const purposeDescription = `디지털 환경을 포함한 사회 전반에서 다양한 개인의 가치와 역량을 증진하고, 인간&기술&자연생태의 조화로운 공존을 추구하며, 포용적 사회를 구현하는 것을 목적으로 한다. 이를 위해 다양한 지원 사업등을 수행함으로써, 모든 개인이 자신의 고유한 특성과 잠재력을 발휘하며 변화하는 사회에 주체적으로 참여할 수 있는 포용적 디지털 사회 구현에 기여함을 목적으로 한다.`;

export default function AboutPage() {
  return (
    <div>
      <ContentContainer className="py-16 md:py-24 flex flex-col items-center">
        <Image 
          src={LogoImage} 
          alt="디지털포용성과네트워크 로고" 
          className="w-96 md:w-[30rem] h-auto mb-4"
        />
        
        
        <div className="w-full max-w-4xl mb-12">
          <Image 
            src={AboutImage} 
            alt="협회 소개 이미지" 
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full max-w-4xl mt-32 mb-16">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-2xl md:text-3xl font-bold text-gray-800">설립 취지</span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-lg md:text-xl leading-8 text-gray-700 whitespace-pre-line font-medium text-center">
              {aboutDescription}
            </p>
        </div>

        <div className="w-full max-w-5xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">교육</h3>
              <p className="text-gray-600 leading-relaxed">
                디지털 소외 계층을 위한 맞춤형 교육 프로그램을 제공합니다.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">접근성</h3>
              <p className="text-gray-600 leading-relaxed">
                모든이가 디지털 서비스를 편하게 이용할 수 있도록 합니다.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">포용</h3>
              <p className="text-gray-600 leading-relaxed">
                다양성을 존중하고 모두가 함께 성장하는 사회를 만듭니다.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-32">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-2xl md:text-3xl font-bold text-gray-800">설립 목적</span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <p className="text-lg md:text-xl leading-8 text-gray-700 whitespace-pre-line font-medium text-center">
              {purposeDescription}
            </p>
        </div>

        <div className="w-full max-w-4xl mt-40">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
              <span className="text-2xl md:text-3xl font-bold text-gray-800">계획</span>
              <span className="w-12 h-1 bg-orange-500 rounded-full"></span>
            </div>
          </div>
          <div className="relative ml-4 md:ml-8 pl-8 md:pl-12">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-200"></div>
            
            <div className="relative mb-8">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-500 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                디지털 환경 접근성과 포용성 증진을 위한 연구 및 정책 개발
              </p>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-400 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                디지털과 포용성 네트워킹 활성화 및 협력 플랫폼 운영
              </p>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-400 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                인공지능 사회 적응을 위한 교육 콘텐츠 및 교육과정 개발
              </p>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-400 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                기술적/언어적/인지적 장벽 해소를 위한 교육 자료 개발 및 보급
              </p>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-400 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                디지털과 포용성 인식 제고 및 확산을 위한 세미나, 포럼, 컨퍼런스 개최
              </p>
            </div>

            <div className="relative mb-16">
              <div className="absolute -left-[42px] md:-left-[52px] top-1 w-5 h-5 bg-orange-300 rounded-full border-4 border-white shadow-md"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium">
                위 사업을 위한 국내외 유관 기관과의 협력 사업
              </p>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}