import Card from "./Card";
import CareerNode from "./CareerNode";

export default function CareerList() {
  return (
    <Card>
      <div className="mx-[20px] my-[20px] flex">
        <div className="space-y-8 border-l-2 border-dashed">
          <CareerNode
            job="한국산업기술대학교 입학 및 졸업"
            desc="한국산업기술대학교 ICT 융합공학과에서 학사 과정을 이수하였습니다."
            fromDate="2019. 02"
            toDate="2022. 02"
          />
          <CareerNode
            job="S.W Dev - (주)이레테크 데이터랩스"
            desc="주식회사 이레테크 데이터랩스에서 소프트웨어 개발자로 근무하였습니다. 
            C#을 사용하여 윈도우 폼 및 WPF를 활용한 프로젝트를 수행하였습니다."
            fromDate="2020. 01"
            toDate="2023. 12"
          />
          <CareerNode
            job="Frontend Dev - (주)이레테크 데이터랩스"
            desc="주식회사 이레테크 데이터랩스에서 프론트엔드 개발자로 근무하였습니다. 
            React를 활용한 웹 서비스 개발 프로젝트와 Electron을 이용한 크로스 플랫폼 응용 프로그램 프로젝트를 수행하였습니다."
            fromDate="2020. 01"
            toDate="2023. 12"
          />
          <CareerNode
            job="국민대학교 야간 대학원 입학 및 졸업"
            desc="국민대학교 야간 대학원에서 인공지능 응용학과를 전공하여 석사 과정을 이수하였습니다."
            fromDate="2022. 09"
            toDate="2024. 02"
          />
        </div>
      </div>
    </Card>
  );
}
