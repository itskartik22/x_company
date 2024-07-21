import ProjectTabs from "./project-tabs";

const PastProjectSection = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold">Projects we are proud of</h1>
        <p>
          Our software development company is truly proud of the wonderful
          clients we have worked with. We enjoy a long-term partnership
        </p>
      </div>
      {/* Project Section */}
      <ProjectTabs />
    </section>
  );
};

export default PastProjectSection;
