import { Upload, Webcam } from "lucide-react";
import OnBoarding from "./_components/OnBoarding";
import FeatureCard from "./_components/FeatureCard";
import FeatureSectionLayout from "./_components/FeatureSectionLayout";
import Image from "next/image";
import { potentialCustomer } from "@/lib/data";
import UserInfoCard from "@/components/ReusableComponent/UserInfoCard";

const Pages = () => {
  return (
    <div className="w-full mx-auto h-full">
      <div className="w-full flex flex-col sm:flex-row justify-between items-start gap-14">
        <div className="space-y-6">
          <h2 className="text-primary font-semibold text-4xl">
            Get maximum Conversion from your webinars
          </h2>

          <OnBoarding />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-content-center">
          <FeatureCard
            Icon={<Upload className="w-10 h-10" />}
            heading="Browse or drag a pre-recorded webinar file"
            link="#"
          />
          <FeatureCard
            Icon={<Webcam className="w-10 h-10" />}
            heading="Browse or drag a pre-recorded webinar file"
            link="/webinar"
          />
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-background-10">
        <FeatureSectionLayout
          heading="See how far along are your potential customers"
          link="/lead"
          className=""
        >
          <div className="p-5 flex flex-col gap-4 items-start border rounded-xl border-border backdrop-blur-3xl">
            <div className="w-full flex justify-between items-center gap-3">
              <p className="text-primary font-semibold text-sm">
                Conversations
              </p>
              <p className="text-xs text-muted-foreground font-normal">50</p>
              <div className="flex flex-col gap-4 items-start">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Image
                    src="/featurecard.png"
                    alt="Info-card"
                    width={250}
                    height={250}
                    className="w-full h-full object-cover rounded-xl"
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </FeatureSectionLayout>

        <FeatureSectionLayout
          heading="See the list of your current customers"
          link="/pipeline"
          className=""
        >
          <div className="flex gap-4 items-center h-full w-full justify-center relative flex-wrap">
            {potentialCustomer.slice(0, 2).map((customer, index) => (
              <UserInfoCard
                customer={customer}
                tags={customer.tags}
                key={index}
              />
            ))}

            <Image
              src={"/glowCard.png"}
              alt="Info-card"
              width={350}
              height={350}
              className="object-cover rounded-xl absolute px-5 mb-28 hidden sm:flex backdrop-blur-[20px]"
            />
          </div>
        </FeatureSectionLayout>
      </div>
    </div>
  );
};
export default Pages;
