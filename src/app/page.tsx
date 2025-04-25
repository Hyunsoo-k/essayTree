import HeroSection from "@/component/HeroSection";

import EssayThumbnailCard from "@/component/EssayThumbnailCard";
import EssayThumbnailCardSkeleton from "@/component/Skeleton/EssayThumbnailCardSkeleton";

import styles from "./page.module.scss";

export default function Home(): JSX.Element {
  const mockData = [
    {
      backGroundImageSrc: "/image/mockImage.jpg",
      title: "대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다",
      content:
        "대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다 대통령은 내우·외환·천재·지변 또는 중대한 재정·경제상의 위기에 있어서 국가의 안전보장 또는 공공의 안녕질서를 유지하기 위하여 긴급한 조치가 필요하고 국회의 집회를 기다릴 여유가 없을 때에 한하여 최소한으로 필요한 재정·경제상의 처분을 하거나 이에 관하여 법률의 효력을 가지는 명령을 발할 수 있다",
      subject: "음식",
      createdAt: "8월 6일 2024년",
    },
    {
      backGroundImageSrc: "/image/mockImage.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet",
      content:
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget al",
      subject: "음식",
      createdAt: "8월 6일 2024년",
    },
    {
      backGroundImageSrc: "/image/mockImage.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet",
      content:
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget al",
      subject: "음식",
      createdAt: "8월 6일 2024년",
    },
    {
      backGroundImageSrc: "/image/mockImage.jpg",
      title: "Lorem ipsum dolor sit amet",
      content:
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Mi eget mauris pharetra et. Non tellus orci ac auctor augue. Elit at imperdiet dui accumsan sit. Ornare arcu dui vivamus arcu felis. Egestas integer eget al",
      subject: "음식",
      createdAt: "8월 6일 2024년",
    },
  ];

  return (
    <main className={styles["page-component"]}>
      <HeroSection />
      <div className={styles["eaasy-thumbnail-card-box"]}>
        {mockData.map((data: any, index: number) => (
          // <EssayThumbnailCardSkeleton key={index} index={index} />
          <EssayThumbnailCard key={index} data={data} index={index} />
        ))}
      </div>
      <div className={styles["boundary-line"]}></div>
    </main>
  );
}
