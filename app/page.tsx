import ScrollButton from "./components/ScrollButton";
import DescCard from "./components/DescCard";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-screen select-none">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there. </h1>
            <p className="py-6">
              Welcome to BioSrc, your go-to resource for all things biology! We
              provide a curated collection of textbooks, past Olympiad exam
              papers, AP/IB test resources, and insightful blog content.
            </p>
            <ScrollButton />
          </div>
        </div>
      </div>

      <div className="w-full bg-gradient-to-b from-transparent to-secondary">
        <div className="grid grid-cols-1 min-h-screen md:grid-cols-2 lg:grid-cols-4 gap-10 items-center mx-10">
          <DescCard
            title="Textbooks"
            imageSrc="/textbooks.png"
            description="Discover a wide collection of biology textbooks, 
            thoughtfully selected to prepare you for anything. Immerse yourself in comprehensive 
            learning experiences with the ability to download, view directly on-site, and bookmark your 
            favorite resources."
            buttonText="Explore"
            buttonColor="primary"
            path="/textbooks"
          />
          <DescCard
            title="Olympiads"
            imageSrc="/olympiads.png"
            description="desc"
            buttonText="Learn More"
            buttonColor="secondary"
            path="/olympiads"
          />
          <DescCard
            title="AP and IB Prep"
            imageSrc="/tests.png"
            description="desc"
            buttonText="placeholder button"
            buttonColor="accent"
            path="/ap-ib"
          />
          <DescCard
            title="blog"
            imageSrc="/blog.png"
            description="desc"
            buttonText="read"
            buttonColor="warning"
            path="/blog"
          />
        </div>
      </div>
    </div>
  );
}
