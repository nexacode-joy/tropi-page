import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#EAEAEA]">
      {/* 이미지들이 화면에 꽉 차도록 설정 */}
      <div className="relative w-full h-screen">
        <Image
          alt="Banner 1"
          src={"/banner1.svg"}
          fill
          className="object-cover"
          priority
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
    </div>
  );
}
