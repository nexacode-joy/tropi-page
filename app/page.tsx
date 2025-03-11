"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // 클라이언트 사이드에서만 실행되는 미디어 쿼리 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 초기 실행
    handleResize();

    // 리사이즈 이벤트 리스너
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex flex-col bg-[#EAEAEA]">
      {isMobile ? (
        <div className="relative w-full">
          {/* 모바일 배너 이미지 (h-auto로 이미지 원래 비율 유지) */}
          <Image
            alt="Mobile Banner"
            src={"/mobile.svg"}
            width={1080}
            height={1920}
            className="w-full h-auto"
            priority
          />

          {/* 이미지 내부 특정 부분 클릭 영역 */}
          <div
            className="absolute transform w-full h-[16%] cursor-pointer"
            style={{ top: 0 }} // 이미지 내부 특정 위치 (px 기준)
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
              )
            }
          />

          {/* 이미지 하단에서 조금 떨어진 부분 클릭 영역 */}
          <div
            className="absolute transform w-full h-[16%] cursor-pointer"
            style={{ bottom: "4.1%" }} // 이미지가 길어도 고정된 위치
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
              )
            }
          />
        </div>
      ) : (
        <>
          {" "}
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 1"
              src={"/banner1.svg"}
              fill
              className="object-cover"
              priority
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
                )
              }
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 2"
              src={"/banner2.svg"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 3"
              src={"/banner3.svg"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 4"
              src={"/banner4.svg"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 5"
              src={"/banner5.svg"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 6"
              src={"/banner6.svg"}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-screen">
            <Image
              alt="Banner 7"
              src={"/banner7.svg"}
              fill
              className="object-cover"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
                )
              }
            />
          </div>
          {/* 푸터는 별도 섹션으로 */}
          <div className="w-full h-[350px] px-30 py-20 flex flex-col gap-2">
            <div>
              <Image alt="logo" src={"/tropi.svg"} width={180} height={50} />
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col text-sm text-black font-Pretendard ">
                (주)골든유스 | 경기도 구리시 건원대로 67, 4층 <br />
                사업자번호: 774-87-02871 | 통신판매업번호: 2023-경기구리-0989호
              </div>
              <div className="flex text-sm text-black font-Pretendard gap-5 ">
                <div className="flex flex-col font-bold">
                  <p>서비스 이용 문의</p> <p>파트너십, 제휴</p>
                </div>
                <div className="flex flex-col">
                  <div>
                    <p>@트로피_TROPI 카카오톡 채널</p>
                    <p>soo@goldenyouth.co.kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* <>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 1"
            src={"/banner1.svg"}
            fill
            className="object-cover"
            priority
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
              )
            }
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 2"
            src={"/banner2.svg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 3"
            src={"/banner3.svg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 4"
            src={"/banner4.svg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 5"
            src={"/banner5.svg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 6"
            src={"/banner6.svg"}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-screen">
          <Image
            alt="Banner 7"
            src={"/banner7.svg"}
            fill
            className="object-cover"
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cafe24.ec.plustropi&hl=ko"
              )
            }
          />
        </div>
        <div className="w-full h-[350px] px-30 py-20 flex flex-col gap-2">
          <div>
            <Image alt="logo" src={"/tropi.svg"} width={180} height={50} />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col text-sm text-black font-Pretendard ">
              (주)골든유스 | 경기도 구리시 건원대로 67, 4층 <br />
              사업자번호: 774-87-02871 | 통신판매업번호: 2023-경기구리-0989호
            </div>
            <div className="flex text-sm text-black font-Pretendard gap-5 ">
              <div className="flex flex-col font-bold">
                <p>서비스 이용 문의</p> <p>파트너십, 제휴</p>
              </div>
              <div className="flex flex-col">
                <div>
                  <p>@트로피_TROPI 카카오톡 채널</p>
                  <p>soo@goldenyouth.co.kr</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}
    </div>
  );
}
